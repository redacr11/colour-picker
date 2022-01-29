import React, { useState } from "react";
import SingleColour from "./SingleColour";

import Values from "values.js";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#00aa25").all(10));

  let colours;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      colours = new Values(colour).all(10);
      setList(colours);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="section container">
        <h3>Pick the Colour</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="#00aa25"
            className={`${error ? "error" : null}`}
          />
          <button
            className="btn"
            type="submit"
            style={{ backgroundColor: `rgb(${list[10].rgb})` }}
          >
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
