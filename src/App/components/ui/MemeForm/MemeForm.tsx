import React from "react";

import styles from "./MemeForm.module.css";
import PropTypes from "prop-types";
import { IImage } from "orsys-tjs-meme/dist/interfaces/common";
import { IMeme } from "../../../../interfaces/common";
import { ACTION_CURRENT } from "../../../store/store";
import { connect } from "react-redux";


interface IMemeFormProps{
  images:Array<IImage>,
  meme:IMeme,
  onFormChange:Function
}

const MemeForm: React.FunctionComponent<IMemeFormProps> = (props) => {
  console.log(props);

  function onTextChange(evt:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>){
    const assembleResult={};
    assembleResult[evt.target.name]=evt.target.value;
    props.onFormChange(assembleResult);
  }

  function onNumberChange(evt:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>){
    const assembleResult={};
    assembleResult[evt.target.name]=Number(evt.target.value);
    props.onFormChange(assembleResult);
  }

  function onCheckedChange(evt:React.ChangeEvent<HTMLInputElement>){
    const assembleResult={};
    assembleResult[evt.target.name]=Number(evt.target.checked);
    props.onFormChange(assembleResult);
  }

  return (
       <div data-testid="MemeForm" className={styles.MemeForm}>
        <form >
          <h1>Titre</h1>
          <input
            type="text"
            id="f_titre"
            name="titre"
            placeholder="saisir titre"
            value={props.meme.titre}
            onChange={onTextChange}
             />
          <hr />
          <h2>Image</h2>
          <select
          name="imageId"
           onChange={onNumberChange}
          >
            <option value="-1">Aucune</option>
            {
              props.images.map((e:IImage, i:number)=> <option key={`opt${i}`} value={e.id}>{e.name}</option> )
            }
          </select>
          <hr />
          <h2>text</h2>
          <input
            type="text"
            name="text"
            value={props.meme.text}
            onChange={onTextChange}
           
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_x">x:</label>
              <br />
              <input
                type="number"
                name="x"
                className={styles.smallInput}
              value={props.meme.x}
              onChange={onNumberChange}
              />
            </div>
            <div>
              <label htmlFor="f_y">y:</label>
              <br />
              <input
                type="number"
                name="y"
                className={styles.smallInput}
                value={props.meme.y}
                onChange={onNumberChange}
              />
            </div>
          </div>
          <hr />
          <label htmlFor="f_color">Couleur</label>
          <input
            type="color"
            name="color"
            id="f_color"
            value={props.meme.color}
            onChange={onTextChange}
          />
          <div className={styles.half}>
            <div>
              <label htmlFor="f_sz">font-size:</label>
              <br />
              <input
                type="number"
                name="fontSize"
                className={styles.smallInput}
                value={props.meme.fontSize}
                min={0}
                onChange={onNumberChange}
              />
            </div>
            <div>
              <label htmlFor="f_fw">font-weight:</label>
              <br />
              <input
                type="number"
                name="fontWeight"
                className={styles.smallInput}
                min="100"
                step="100"
                max="900"
                value={props.meme.fontWeight}
                onChange={onNumberChange}
              />
            </div>
          </div>
          <div className={styles.half}>
            <div>
              <label htmlFor="f_underline">underline:</label>
              <br />
              <input
                id="f_underline"
                type="checkbox"
                name="underline"
                checked={props.meme.underline}
                onChange={onCheckedChange}
              />
            </div>
            <div>
              <label htmlFor="f_italic">italic:</label>
              <br />
              <input
                id="f_italic"
                name="italic"
                type="checkbox"
                checked={props.meme.italic}
                onChange={onCheckedChange}
              />
            </div>
          </div>
          <div className={styles.half}>
           
          </div>
        </form>
      </div>
  );
};

//mstp map state to props
function mstp(state,ownprops){
  return {
    ...ownprops, 
    images:state.ressources.images,
    meme:state.current
  }
}

//mdtp map dispatch to props
function mdtp(dispatch){
  return {
    onFormChange:(objt:any)=>(dispatch({type:ACTION_CURRENT.UPDATE_MEME, value:objt}))
  }
}
export const ConnectedMemeForm=connect(mstp,mdtp)(MemeForm);
export default MemeForm;