import React from 'react'
import "./Item.scss"

const Item = ({item}) => {
    const{name,price}=item;
    // console.log("U AJTEMU", item)
    return (
            <div style={{
                backgroundImage:`url(${ item.images[0].fields.file.url })` 
            }} className="item-container">
               
                <div className="item-price">{price}$</div>
                <div className="item-name">{name}</div>
            </div>
    )
}

export default Item

