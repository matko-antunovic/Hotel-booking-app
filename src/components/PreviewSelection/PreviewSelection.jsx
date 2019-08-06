import React, { Component } from 'react'
import "./PrevieSelection.scss"
import DATA from "../../assets/data";
import Item from "../Item/Item"

class PreviewSelection extends Component {

    state={
        listing:DATA
    }

    render() {
        const {listing}=this.state;

        return (
            <div className="selection">

                {listing.map((item,i)=>{
                   return <Item key={item.sys.id} item={item} index={i}/> 
                })}
               
            </div>
        )
    }
}
export default PreviewSelection;