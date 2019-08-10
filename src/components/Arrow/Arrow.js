import React from 'react'
import "./Arrow.scss"

const Arrow = ({glyph,direction,handleClick}) => {
    return (
        <div 
		className={ `slide-arrow ${direction}` } 
		onClick={ handleClick }>
		{ glyph } 
	</div>
    )
}

export default Arrow
