import React, { useState } from "react";
import SingleColour from "./SingleColour";

import Values from "values.js";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#00aa25").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colours = new Values(colour).all(10);
      setList(colours);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="section container">
        <h3>Colour Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#00aa25"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="section colours">
        {list.map((colour, index) => (
          <SingleColour
            key={index}
            {...colour}
            index={index}
            hexColour={colour.hex}
          />
        ))}
      </div>
    </>
  );
}

export default App;
