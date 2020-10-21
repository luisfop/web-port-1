import React from "react";

import {Link } from 'react-router-dom';
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({ children, type, buttonStyle, buttonSize, clicked }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonZise = SIZES.includes(buttonSize ? buttonSize : SIZES[0]);

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonZise}`}
        onClick={clicked}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
