import React from 'react'
import PropTypes from 'prop-types'; 

import style from './Button.module.css'

const Button = (props) => {
    console.log(props);
    return <button 
        className={style.Button} 
        style={{...props.style, backgroundColor: props.bgColor, color: props.color}}
        type={props.type}
        >{props.children}</button>
}
Button.PropType={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.string
}

Button.defaultProps={
    bgColor: 'yellow',
    color: 'white',
    type: 'button'
}

export default Button
