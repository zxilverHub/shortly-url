import './Hero.css'
import Working from '../images/illustration-working.svg'

function Hero() {
  return (
    <div id='hero'>
        <div className="hero-title">
          <h1 className='title'>More than just shorter links</h1>
          <p className='sub'>Build your brand's recognation and get detailed insights on how your links are performing</p>
          <a href='#' className='cta'>Get Started</a>
        </div>
        <div className="working-illustration">
            <img src={Working} alt="Working" />
        </div>
        
    </div>
  )
}

export default Hero