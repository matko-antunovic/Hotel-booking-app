import React from 'react'
import "./PrevieSelection.scss"
import Item from "../Item/Item"


const PreviewSelection=({rooms,sortedRooms})=> {

        return (
            <div className="selection">
                { sortedRooms ? sortedRooms.map((item,i)=>{
                   return <Item key={i} item={item.fields} id={item.sys.id}/> 
                }) : "nista"} 
               
            </div>
        )
    }
export default PreviewSelection;