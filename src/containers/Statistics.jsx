import './Statistics.css'
import brand from '../images/icon-brand-recognition.svg'
import details from '../images/icon-detailed-records.svg'
import customize from '../images/icon-fully-customizable.svg'

function Statistics() {

  const cards = [
    {
      icon: brand,
      title: 'Brand Recognation',
      sub: 'Boost your brand recognition with each click. Generic links don\'t mean a thig. Branded links help instill confidence in your content.'
    },
    {
      icon: details,
      title: 'Detailed Records',
      sub: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      icon: customize,
      title: 'Fully Customizable',
      sub: 'Improve brand awareness and content descovery through customizable links, supercharging audience engagement.'
    }
  ]

  return (
    <div id='statistics'>
        <div className="statistic-title">
          <h2 className='title'>Advanced Statistics</h2>
          <p className='sub'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="cards">
        { cards.map((card, i)=>(
          <div className="card" key={i}>
            <img src={ card.icon } alt={card.title} className='card-icon' />
            <p className='title'>{card.title}</p>
            <p className='sub'>{card.sub}</p>
          </div>
        )) }
        </div>
    </div>
  )
}

export default Statistics