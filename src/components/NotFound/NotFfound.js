import { Link } from "react-router-dom"
import './index.sass'
import pt1 from '../../assets/images/notfound_bg_part1.svg'
import pt2 from '../../assets/images/notfound_bg_part2.svg'
import pt3 from '../../assets/images/notfound_bg_part3.svg'
import pt4 from '../../assets/images/notfound_bg_part4.svg'

export default function NotFound() {
    return (
        <div className="container notfound-page">
            <div className='notfound-page__cover-img'>
                <div className="notfound-page__cover-img--pt1">
                    <img src={pt1} />
                </div>
                <div className="notfound-page__cover-img--pt2">
                    <img src={pt2} />
                </div>
                <div className="notfound-page__cover-img--pt3">
                    <img src={pt3} />
                </div>
                <div className="notfound-page__cover-img--pt4">
                    <img src={pt4} />
                </div>
            </div>
            <div className="notfound-page__text-zone">
                <h1>Oops!<br/>You seem to be lost.</h1>
                <p>Here are some helpful links:</p>
                <div className="links">
                    <Link to='/portfolio' className="btn contact-button">Home</Link>
                    <Link to='/portfolio/contact' className="btn cv-button">Contact</Link>
                </div>
                
            </div>
        </div>
    )
}