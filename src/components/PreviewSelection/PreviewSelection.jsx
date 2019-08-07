import React, { Component } from 'react'
import "./PrevieSelection.scss"
import Item from "../Item/Item"

class PreviewSelection extends Component {

    

    render() {
        //  console.log("U PREVIEWU" ,this.props.rooms)
        let listing=this.props.rooms.map(room=>room.fields);
        return (
            <div className="selection">
                {listing.map((item,i)=>{
                   return <Item key={i} item={item}/> 
                })} 
               
            </div>
        )
    }
}
export default PreviewSelection;