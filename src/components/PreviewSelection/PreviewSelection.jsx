import React from 'react'
import "./PrevieSelection.scss"
import Item from "../Item/Item"


const PreviewSelection=({rooms,sortedRooms})=> {

        return (
            <div className="selection">
                { sortedRooms.length>0 ? sortedRooms.map((item,i)=>{
                   return <Item key={i} item={item.fields} id={item.sys.id}/> 
                }) : (<p>No rooms found with specified criteria...</p>)} 
               
            </div>
        )
    }
export default PreviewSelection;