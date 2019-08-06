import React from 'react';
import "./Button.scss"

const Button = ({text}) => {
    return (
        <button onClick={()=>console.log("aloo")} className="button">{text}</button>
    )
}

export default Button
