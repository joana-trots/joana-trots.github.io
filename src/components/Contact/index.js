import { Link } from 'react-router-dom'
import './index.sass'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import qr from '../../assets/images/qr-code.png'

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const [responsed, setResponsed] = useState(false)

    const titleArray = ['C', 'o', 'n', 't', 'a', 'c', 't', '', '', 'm', 'e']
    const thanksArray = ['T', 'h', 'a', 'n', 'k', '', 'y', 'o', 'u', '!']

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_aot765o', 'template_6fhoxf1', '#contact-form', 'uEvqLwIMS_CzlJXGA')
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setResponsed(!responsed)
        }, function(error) {
        console.log('FAILED...', error);
        });
    }
    
    return (
       <>
        <div className='container contact-page'>
            <div className='contact-page__text-zone'>
                <h1>
                    <AnimatedLetters 
                    srtArray={responsed ? thanksArray : titleArray}
                    idx={1}
                    letterClass={letterClass} />
                </h1>
                <span className={responsed ? 'caption display-none' : 'caption'}>I'm looking for a role in established IT company with the opportunity to work with the latest technologies. However, if you have other request or question, don't hesitate to contact me using below form either.</span>
                <form id="contact-form" className={responsed ? 'contact-form display-none' : 'contact-form'} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" required />
                        <span className='label'>Name</span>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" required />
                        <span className='label'>Email</span>
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <textarea name="message" required></textarea>
                        <span className='label'>Message</span>
                    </div>
                    <input type="submit" value="Send" className='btn' />
                </form>
            </div>
            <div className='contact-page__cover-zone'>
                <p>
                    <img width='100%' src={qr}/>
                </p>
            </div>
       </div>
       <Loader type='ball-scale-ripple-multiple'/>
       </>
    )
}
export default Contact