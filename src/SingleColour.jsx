import React, { useState, useEffect } from "react";
// import rgbToHex from "./utils/utils";

const SingleColour = ({ rgb, weight, index, hexColour }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColour}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <div
      className={`colour ${index > 10 && "colour-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}</p>
      <p className="colour-value">{hexValue}</p>
      {alert && <p className="alert">💯🎉 Copied to clipboard! 🎉💯</p>}
    </div>
  );
};

export default SingleColour;
