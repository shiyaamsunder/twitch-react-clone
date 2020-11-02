import React, { useState } from "react";
import "./Input.css";

const SIZES = ["medium", "small", "large"];

const Input = ({ size, placeholder, type }) => {
  const [input, setInput] = useState("");
  const Inputsize = SIZES.includes(size) ? size : SIZES[0];
  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className={`Input ${Inputsize}`}
      />
      {type === "header" ? (
        <div className="search__icon">
          <i
            className={
              input === "" ? " fas fa-search disabled" : `fas fa-search`
            }
          ></i>
        </div>
      ) : null}
    </>
  );
};

export default Input;
