import React from 'react'
import PropTypes from 'prop-types'; 

import style from './Button.module.css'

const Button = (props) => {
    console.log(props);
    return <button 
        className={style.Button} 
        style={{...props.style, backgroundColor: props.bgColor, color: props.color}}>{props.children}</button>
}
Button.PropType={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object
}

Button.defaultProps={
    bgColor: 'yellow',
    color: 'white'
}

export default Button
