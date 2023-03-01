import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'

import img_01 from '../../../../assets/images/portfolio/nft-card-preview-component.png'
import img_02 from '../../../../assets/images/portfolio/sunnyside-agency-landing-page.jpg'
import img_03 from '../../../../assets/images/portfolio/loremipsum.net-landing-page.png'
import img_04 from '../../../../assets/images/portfolio/manao-landing-page.png'
import img_05 from '../../../../assets/images/portfolio/base-apparel-page.jpg'
import img_06 from '../../../../assets/images/portfolio/interactive-rating-component.png'
import img_07 from '../../../../assets/images/portfolio/product-preview-card-component.png'
import img_08 from '../../../../assets/images/portfolio/article-preview-component.png'
import img_09 from '../../../../assets/images/portfolio/landie.png'
import img_10 from '../../../../assets/images/portfolio/mars-one-application-form.png'
import img_11 from '../../../../assets/images/portfolio/responsive-prototype-with-grids.png'
import img_12 from '../../../../assets/images/portfolio/mobile-poker.png'
import img_13 from '../../../../assets/images/portfolio/adinc-logo-concept.png'
import img_14 from '../../../../assets/images/portfolio/glassmorphism-main-screen.png'
import img_15 from '../../../../assets/images/portfolio/go-yandexru.jpg'

export default [
    {
        id: 14,
        url: "https://www.figma.com/file/4xXcIyJbCfKcbV3Zw8NGm6/glass-ui-design?node-id=1%3A2&t=DfgMtiYgLGzRamZm-1",
        img_src: img_14,
        title: "Main screen with glassmorphism effect",
        tags: [<span className='tag'>Web Design</span>, <span className='tag'>Figma</span>, <span className='tag'>Glassmorphism</span>],
        links: [
            <a href="https://www.figma.com/file/4xXcIyJbCfKcbV3Zw8NGm6/glass-ui-design?node-id=1%3A2&t=DfgMtiYgLGzRamZm-1" target="_blank" title="See in Figma" rel="noreferrer"><FontAwesomeIcon icon={faFigma} /></a>,
        ]
    },
    {
        id: 13,
        url: "https://www.figma.com/file/fpMDBw5jTcXZp0lL3H51HB/Ad.Inc?node-id=110%3A180&t=J2NmhjRVogsbzckB-1",
        img_src: img_13,
        title: "Quick Logo concept design process",
        description: ["This is a logo concept for digital marketing agency AD.Inc. It was made very quickly (within 1 hour) with an explanation of style, colors and typography.", <br />, "Dealing with deadlines like a pro 🔥"],
        tags: [<span className='tag'>Web Design</span>, <span className='tag'>Figma</span>, <span className='tag'>Logo</span>, <span className='tag'>Neubrutalism</span>, <span className='tag'>Oblique plugin</span>],
        links: [
            <a href="https://www.figma.com/file/fpMDBw5jTcXZp0lL3H51HB/Ad.Inc?node-id=110%3A180&t=J2NmhjRVogsbzckB-1" target="_blank" title="See in Figma" rel="noreferrer"><FontAwesomeIcon icon={faFigma} /></a>,
        ]
    },
    {
        id: 12,
        url: "https://joana-trots.github.io/base-apparel-coming-soon-page/",
        img_src: img_05,
        title: "Base Apparel - Coming Soon Page",
        description: "Simple HTML & CSS responsive solution that includes input field with validation and error message",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SASS</span>, <span className='tag'>Grids</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://github.com/joana-trots/base-apparel-coming-soon-page" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/base-apparel-coming-soon-page/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 11,
        url: "https://joana-trots.github.io/sunnyside-agency-landing-page/",
        img_src: img_02,
        title: "Sunnyside Agency Landing Page",
        description: "This solution focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SASS</span>, <span className='tag'>Flexbox</span>, <span className='tag'>Grids</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://github.com/joana-trots/sunnyside-agency-landing-page" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/sunnyside-agency-landing-page/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    
    {
        id: 10, 
        url: "https://joana-trots.github.io/landie/",
        img_src: img_09,
        title: "Product Landing Page",
        description: "Product Landing Page with React and inView Hook (react-intersection-observer)",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>React</span>, <span className='tag'>JavaScript</span>, <span className='tag'>SASS</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://github.com/joana-trots/landie" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/landie/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 9,
        url: "https://joana-trots.github.io/mars-one-application-form/",
        img_src: img_10,
        title: "Beautiful Application Form for Mars One Mission",
        description: "This is a beautiful Application Form with custom styles, validation and parallax effect",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SASS</span>, <span className='tag'>JavaScript</span>, <span className='tag'>jQuery</span>, <span className='tag'>Form validation</span>, <span className='tag'>Parallax</span>],
        links: [
            <a href="https://github.com/joana-trots/mars-one-application-form" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/mars-one-application-form/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 8,
        url: "https://joana-trots.github.io/product-preview-card-component/",
        img_src: img_07,
        title: "Product Preview Card component",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SASS</span>, <span className='tag'>Flexbox</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://github.com/joana-trots/product-preview-card-component" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/product-preview-card-component/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 7,
        url: "https://joana-trots.github.io/manao-landing-page/",
        img_src: img_04,
        title: "MANAO Landing Page",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SASS</span>, <span className='tag'>Slick Slider</span>, <span className='tag'>JavaScript</span>],
        links: [
            <a href="https://github.com/joana-trots/manao-landing-page" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/manao-landing-page/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 6,
        url: "https://joana-trots.github.io/test-softcorp/",
        img_src: img_03,
        title: "Corporate Web Page",
        description: "This is a solution of a responsive corporate web page with Main Screen and Ordering Form. All inputs in the Form made manually with CSS and JS according to the design.",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SCSS</span>, <span className='tag'>Flexbox</span>, <span className='tag'>Responsive</span>, <span className='tag'>Media queries</span>, <span className='tag'>jQuery</span>, <span className='tag'>Form validation</span>],
        links: [
            <a href="https://github.com/joana-trots/test-softcorp" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/test-softcorp/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 5,
        url: "https://joana-trots.github.io/nft-card/",
        img_src: img_01,
        title: "NFT Preview card component",
        description: "HTML & CSS only solution of a Preview card component",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>Flexbox</span>],
        links: [
            <a href="https://github.com/joana-trots/nft-card" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/nft-card/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 4,
        url: "https://joana-trots.github.io/interactive-rating-component/",
        img_src: img_06,
        title: "Interactive rating component",
        description: "Users are able to select and submit a number rating and also see the 'Thank you' card state after submitting a rating. There is a helpful gist with SASS Mixins of CSS Flexbox rules",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>SCSS/SASS</span>, <span className='tag'>Flexbox</span>, <span className='tag'>Javascript</span>],
        links: [
            <a href="https://github.com/joana-trots/interactive-rating-component" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/interactive-rating-component/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 15,
        url: "https://go.yandex/ru_ru/lp/rides/scooter",
        img_src: img_15,
        title: "Promo Page for YandexGo",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>Tilda</span>, <span className='tag'>Zero blocks</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>Flexbox</span>, <span className='tag'>Flickity plugin</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://go.yandex/ru_ru/lp/rides/scooter" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 3,
        url: "https://joana-trots.github.io/article-preview-component/",
        img_src: img_08,
        title: "Article Preview component",
        description: "A tiny implementation of the share icon by three different ways, when clicked social media links appears - hover effect, checkbox method, JavaScript method",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>Javascript</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://github.com/joana-trots/article-preview-component/" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/article-preview-component/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    
    {
        id: 2,
        url: "https://joana-trots.github.io/responsive-prototype-with-grids/",
        img_src: img_11,
        title: "Responsive Prototype with Grids",
        description: "This is a Responsive Prototype of web page made with CSS Grids",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>Grids</span>, <span className='tag'>Responsive</span>],
        links: [
            <a href="https://github.com/joana-trots/responsive-prototype-with-grids" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/responsive-prototype-with-grids/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
    {
        id: 1,
        url: "https://joana-trots.github.io/mobile-poker/",
        img_src: img_12,
        title: "Mobile Poker App - Personal account",
        tags: [<span className='tag'>Frontend</span>, <span className='tag'>HTML/CSS</span>, <span className='tag'>LESS</span>, <span className='tag'>Flexbox</span>, <span className='tag'>jQuery</span>, <span className='tag'>SVG</span>, <span className='tag'>Mobile First</span>],
        links: [
            <a href="https://github.com/joana-trots/mobile-poker" target="_blank" title="See Github repository" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>,
            <a href="https://joana-trots.github.io/mobile-poker/" target="_blank" title="See Live project" rel="noreferrer"><FontAwesomeIcon icon={faEye} /></a>
        ]
    },
]