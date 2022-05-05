import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeThunmbnail.module.css";
import { IImage, IMeme } from "../../../../interfaces/common";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

interface IMemeFormProps{
  images:Array<IImage>,
  memes:Array<IMeme>,
}

const MemeThunmbnail : React.FunctionComponent<IMemeFormProps> = (props) => {
  console.log(props);
  // const [state, setstate] = useState(memeThunmbnailInitialState);
  useEffect(() => {}, []);
  return (
    <div className={style.MemeThunmbnail} data-testid="MemeThunmbnail">
      
      {props.memes.map((m, i)=> 
          <Link to={`/edit/${m.id}`} key={`lk-`+i}><MemeSVGViewer key={`thumb-`+i} meme={m} image={props.images.find((e)=> e.id === m.imageId)}/></Link>)}
    </div>
  );
};

MemeThunmbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired
};
MemeThunmbnail.defaultProps = {};

function mapStateToProps(state, ownprops: any){
  return {
    ...ownprops,
    memes:state.ressources.memes,
    images: state.ressources.images
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export const ConnectedMemThumbnail=connect(mapStateToProps, mapDispatchToProps)(MemeThunmbnail)
export default MemeThunmbnail;