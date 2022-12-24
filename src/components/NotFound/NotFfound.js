import { Link } from "react-router-dom"
import './index.sass'

export default function NotFound() {
    return (
        <div className="container notfound-page">
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