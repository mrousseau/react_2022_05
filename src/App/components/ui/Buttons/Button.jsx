import React from 'react'
import PropTypes from 'prop-types'; 

import style from './Button.module.css'

const Button = (props) => {
    console.log(props);
    return <button className={style.Button} style={{backgroundColor: props.bgColor}}>{props.children}</button>
}
Button.PropType={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string.isRequired
}

export default Button
