import React from 'react'

export default function Menu({item}) {
    return (
        <div className='section-center'>
            {item.map((menuItems) => {
                const{id , title, img , desc, price} = menuItems;
                return (
                    <>
                    <article key={id} className='menu-item'>
                        <div>
                        <img src={img} alt={title} className='photo'/>
                        <div className='item-info'>
                            <header>
                                <h4>{title}</h4>
                                <h4 className='price'> Rs {price}</h4>
                            </header>
                            <p className='item-text'> {desc}</p>
                        </div>
                        
                        </div>
                        <button className='btn'> Click to Order</button>
                    </article>
                
                    </>
                )
            })}
            
        </div>
    )
}
