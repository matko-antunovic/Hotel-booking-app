import React from 'react'
import "./PrevieSelection.scss"
import Item from "../Item/Item"


const PreviewSelection=({rooms})=> {

        return (
            <div className="selection">
                {rooms.map((item,i)=>{
                   return <Item key={i} item={item.fields} id={item.sys.id}/> 
                })} 
               
            </div>
        )
    }
export default PreviewSelection;