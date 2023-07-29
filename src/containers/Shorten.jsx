import './Shorten.css'
import { useReducer, useState } from 'react'

function linkReducer(links, action) {
    switch(action.type) {
      case 'addLink':
        return [ ...links, { longLink: action.payload.longLink, shortLink: action.payload.shortLink, copy: 'Copy' } ]

      case 'copy':
        links.forEach(nl => {
          if(nl.shortLink === action.payload) {
            nl.copy = 'Copied';
          }
        })
        return links

      default:
        console.log('def')
        return links
    }
}

function Shorten() {
  const [links, dispatchLinks] = useReducer(linkReducer,  [] ) 

  async function fetchLink(link) {

    try {
      const res = await fetch(` https://api.shrtco.de/v2/shorten?url=${link}`)
      const data = await res.json();
      const shortLink = await data.result.short_link

      setTimeout(()=>{
        dispatchLinks({type: 'addLink', payload: { shortLink: shortLink, longLink: link } })
      }, 200)
    } catch (error) {
      console.log(error)
    }
  }

  const [value, setvalue] = useState('')
  const [err, setErr] = useState(false)
  const [load, setLoad] = useState(0)

  const shortenLink = () =>{
    if(value) {
      fetchLink(value)
      setvalue('')
      setErr(false)
    } else {
      setErr(true)
    }
  }

  const handleCopyClick = (textToCopy) => {
    navigator.clipboard
      .writeText(textToCopy)
    
    dispatchLinks({ type: 'copy', payload: textToCopy });
  };
  
  const errBorder = {
    outline: err? '4px solid var(--red)':''
  }

  const copyClicked = (link) => {
    setLoad(load + 1)
    handleCopyClick(link)
    dispatchLinks({ type: 'copy', payload: link });
  }


  return (
    <div id='shorten'>
      <div className="input">
        <div className="input-field">
          <input type="text" className='link-input' placeholder='Shorten a link here...'
             value={value} onChange={(e)=> setvalue(e.target.value)}  style={errBorder}
          />
          { err && <p className='err'> <i> Please add a link </i> </p> }
        </div>
        <p className='none'>{load}</p>
          <button className='shorten-button' onClick={shortenLink}>Shorten it!</button>
      </div>
        { links.map((link, i)=>(
          <div className="result" key={i}>
            <div className="link">
              <p className='long-link'>{link.longLink}</p>
              <hr />
              <p className='short-link'>{link.shortLink}</p>
            </div>

            <button className={ `copy ${link.copy} }` }
              onClick={()=> copyClicked(link.shortLink) }
            >{ link.copy }</button>
          </div>
        )) }
      </div>
  )
}

export default Shorten