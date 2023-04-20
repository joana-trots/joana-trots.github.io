import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import items from '../Cards/CardsList/cardsList'

const Cards = () => {
    return (
        <div className="portfolio-page__main">  
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1024: 3}}>
                <Masonry gutter='30px'>      
                    {
                        items.map((item, i) => {
                            return (
                                <div className='card' key={item.id}>
                                    <a href={item.url} target="_blank" title={item.title} rel="noreferrer">
                                        <div className='card__cover'>
                                            <img src={item.img_src} alt={item.title}></img>
                                        </div>
                                    </a>
                                    <a href={item.url} target="_blank" title={item.title} rel="noreferrer">
                                        <div className='card__header'>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </a>
                                    <div className='card__description'>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className='card__links'>
                                        {item.links}
                                    </div>
                                    <div className='card__tags'>
                                        {item.tags}
                                    </div>
                                </div>
                            )
                        })
                    }
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}

export default Cards