import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeThunmbnail.module.css";

const memeThunmbnailInitialState = {};

const MemeThunmbnail = (props) => {
  const [state, setstate] = useState(memeThunmbnailInitialState);
  useEffect(() => {}, []);
  return (
    <div className={style.MemeThunmbnail} data-testid="MemeThunmbnail">
      MemeThunmbnail
      <br />
      {JSON.stringify(props)}
    </div>
  );
};

MemeThunmbnail.propTypes = {};
MemeThunmbnail.defaultProps = {};

export default MemeThunmbnail;