import { Link } from 'react-router-dom'
import './index.sass'
import { faArrowRight, faLocationDot, faGlobe, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import aboutCover from '../../assets/images/about-cover.png'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
        <>
            <div className="container about-page">
                <div className="about-page__text-zone">
                    <div className='about-section'>
                        <div className='about-section__left-side'>
                            <h1>
                                <AnimatedLetters letterClass={letterClass} 
                                srtArray={['A', 'b', 'o', 'u', 't', '','', 'm', 'e']} 
                                idx={1}></AnimatedLetters>
                            </h1>
                            <p className='location'>
                                <span><FontAwesomeIcon icon={ faLocationDot } className='location__dot'/> Belarus</span> 
                                <span><FontAwesomeIcon icon={ faLocationDot } className='location__dot'/> Poland</span>
                                <span><FontAwesomeIcon icon={ faGlobe } className='location__dot'/> Remote</span>
                            </p>
                            <p className='highlight-text'>Stack: HTML/CSS, LESS, SCSS, Javascript, jQuery, React, Gulp, Figma, Photoshop, GIT</p>
                            <p>I&rsquo;m an&nbsp;ambitious frontend developer with a&nbsp;good sense of&nbsp;beauty&nbsp;🤩 and willingness to develop amazing user experiences. I&rsquo;m really passionate about creating nice and stunning products with a&nbsp;clean code.</p>
                            <p>Contributing to the design and development of web based user interfaces, working with the latest tools and cutting-edge web technologies - are the most important things I rely on when choosing a dream job.</p>
                            <p>I would like to be a part of a professional team that takes pride in its craft and ship expertly engineered UIs.</p>
                            <p>I'm exited to try new things and always ready for challenges&nbsp;🤘&nbsp;💪</p>
                        </div>
                        <div className='about-section__right-side'>
                            <div className='cv-block'>
                                <a href='https://heavy-cocoa-dbf.notion.site/Joana-Trots-3aee967485a1499c91284d6d8e11a428' target='_blank' rel='noreferrer' title='CV | Notion'>
                                    <span className='caption'>Learn more</span>
                                    <span className='par'>You can see my work background, skills and education right in my CV</span>
                                    <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                                </a>
                            </div>
                            <img src={aboutCover} alt='about cover'></img>
                        </div>
                    </div>
                    
                    <Link to="/portfolio/my-work" className='portfolio-block'>
                        <div>
                            <span className='caption'>Portfolio</span>
                            <h3>Take a look at my work</h3>
                            <span className='par'>Development and design solutions</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                        </div>
                    </Link>
                    
                    <Link to='/portfolio/blog' className='blog-block'>
                        <div>
                            <span className='badge soon'></span>
                            <span className='caption'>Blog</span>
                            <h3>All about my professional life</h3>
                            <span className='par'>Tips & tricks, achievements and insights</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                        </div>
                    </Link>
                    <Link to='/portfolio/roadmap' className='roadmap-block'>
                        <div>
                            <span className='badge soon'></span>
                            <span className='caption'>Roadmap</span>
                            <h3>My growth and learning plan</h3>
                            <span className='par'>See my roadmap</span>
                            <FontAwesomeIcon icon={ faArrowRight } className='arrow-link' />
                        </div>
                    </Link>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    )
}

export default About