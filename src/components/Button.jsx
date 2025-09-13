import React from 'react'

const Button = ({ text, type, color }) => {
    return (
        <button className='btn-compo' style={{ backgroundColor: color }}>{text}</button>
    );
}

export default Button