import React from 'react'
import "./Item.scss"

const Item = ({item,index}) => {
    console.log(item)
    const{name,price,tag,capacity,slug,size,pets,breakfast,featured,description,extras,images}=item.fields;
//    console.log("indexxxxxxx", item.fields.images[0].fields.file.url)
   console.log("indexxx", index)
   const {roomImages}=item.fields.images;
    return (
            <div style={{
                backgroundImage:`url(${ item.fields.images[0].fields.file.url })` 
            }} className="item-container">
                <p>Name:{name}</p>
                <p>Price:{price}$</p>
            </div>
    )
}

export default Item

