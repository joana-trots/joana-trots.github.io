import { Link } from 'react-router-dom'
import './index.sass'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['H', 'i', ',', '','', 'I', "'m", '','', 'J', 'o', 'a', 'n', 'a', ' ', '🖖']
    const jobArray = ['F', 'r', 'o', 'n', 't', 'e', 'n', 'd', '','', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '','', '&']
    const jobArray2 = ['W', 'e', 'b', '','', 'D', 'e', 's', 'i', 'g', 'n', 'e', 'r']
    return (
        <>
            <div className="container home-page">
                <div className='home-page__cover-img'></div>
                <div className="home-page__text-zone">
                    <p className='caption'>Portfolio</p>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} 
                        srtArray={nameArray} idx={1}></AnimatedLetters>
                    </h1>
                    <h2>
                        <AnimatedLetters letterClass={letterClass} 
                            srtArray={jobArray} idx={17}></AnimatedLetters>
                        <br/> 
                        <AnimatedLetters letterClass={letterClass} 
                        srtArray={jobArray2} idx={37}></AnimatedLetters>
                    </h2>
                    <a href='/portfolio/CV_JoanaTrots.pdf' className="btn cv-button" download title='download pdf'>
                        CV&nbsp;
                        <FontAwesomeIcon icon={faDownload} />
                    </a>
                    <Link to="/portfolio/contact" className="btn contact-button">
                        Contact me
                    </Link>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Home