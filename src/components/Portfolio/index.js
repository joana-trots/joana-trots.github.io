import './index.sass'
import AnimatedLetters from '../AnimatedLetters'
import Cards from './Cards'
import { useState } from 'react'
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
            <div className="container portfolio-page">
                <div className='portfolio-page__text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} 
                                        srtArray={['P', 'o', 'r', 't', 'f','o', 'l', 'i', 'o']} 
                                        idx={1}>
                        </AnimatedLetters>
                    </h1>
                    <div className='portfolio-page__filter'>
                        
                    </div>
                    <Cards></Cards>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default Portfolio