import React, { useState } from 'react'
import './Nav.css'
import Logo from '../images/logo.svg'

function Nav() {

    const Menu = ()=> (
        <>
            <p><a href="#shorten">Features</a></p>
            <p><a href="#sponsor">Pricing</a></p>
            <p><a href="#statistics">Resources</a></p>
        </>
    )
    
    const Account = ()=> (
        <>
            <p>Login</p>
            <p>Sign Up</p>
        </>
    )
    
    const [spand, setSpand] = useState(false)
    const spandMenu = () =>{
        setSpand(!spand)
    }

    const spanding = {
        height: spand? '50%': '0%',
        padding: spand? '2rem': '0'
    }


  return (
    <div className='nav'>
        <img src={Logo} alt="logo" />
        <div className="desktop-menu">
            <Menu />
        </div>

        <div className="account">
            <Account />
        </div>

        <div className="mobile-menu" style={spanding} onClick={()=>setSpand(false)}>
            <Menu />
            <Account />
        </div>

        
        <svg onClick={spandMenu} className='hamburger' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512">
            { !spand ?  
            <path fill='#9e9aa7'd="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            :
            <path fill='#9e9aa7' d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        }
        </svg>

    </div>
  )
}

export default Nav