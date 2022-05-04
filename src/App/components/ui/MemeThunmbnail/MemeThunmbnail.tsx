import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeThunmbnail.module.css";
import { IImage, IMeme } from "../../../../interfaces/common";
import { MemeSVGViewer } from "orsys-tjs-meme";

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
      {props.memes.map((m, i)=> <MemeSVGViewer key={`thumb-`+i} meme={m} image={props.images.find((e)=> e.id === m.imageId)}/>)}
    </div>
  );
};

MemeThunmbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired
};
MemeThunmbnail.defaultProps = {};

export default MemeThunmbnail;