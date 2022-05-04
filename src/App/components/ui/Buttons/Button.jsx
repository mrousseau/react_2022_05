import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'; 

import style from './Button.module.css'

//protection contre double click sur le bouton 
let desccripteur=undefined;

const Button = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    useEffect(()=>{
        console.log('isClicked a changer->', isClicked);
        if(isClicked===true && desccripteur === undefined){
            setTimeout(()=>{
                setIsClicked(false);
                desccripteur= undefined;
            },1000);
        }
        
    }, [isClicked])

    return <button 
        className={`${style.Button}${isClicked?' '+style.clicked:''}`} 
        style={{...props.style, backgroundColor: props.bgColor, color: props.color}}
        type={props.type}
        onClick={(evt)=>{
            setIsClicked(true);
            props.onButtonClicked();
        }}
        
        >{props.children}
        <br/>
        {isClicked.toString()}
        </button>
}
Button.PropType={
    children: PropTypes.any.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    style: PropTypes.object,
    type: PropTypes.string,
    onButtonClicked: PropTypes.func.isRequired
}

Button.defaultProps={
    bgColor: 'yellow',
    color: 'white',
    type: 'button',
    onButtonClicked: ()=>{}
}

export default Button
