import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handlecleartext = () => {
    let newText = "";
    setText(newText);
  };

  const TitleCase = () => {
    let newText = text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setText(newText);
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="mb-3">
          <h3>{props.heading}</h3>
          <textarea
            className="form-control mb-2"
            id="exampleFormControlTextarea1"
            rows="4"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <div className="row">
            <div className="col-sm-3 d-grid gap-2">
              <button
                className="btn btn-secondary mt-1"
                onClick={handleUpClick}
              >
                To Uppercase
              </button>
            </div>
            <div className="col-sm-3 d-grid gap-2">
              <button
                className="btn btn-secondary mt-1"
                onClick={handleLowerClick}
              >
                To Lowercase
              </button>
            </div>

            <div className="col-sm-3 d-grid gap-2">
              <button className="btn btn-secondary mt-1" onClick={TitleCase}>
                To Capatilize
              </button>
            </div>

            <div className="col-sm-3 d-grid gap-2">
              <button
                className="btn btn-secondary mt-1"
                onClick={handlecleartext}
              >
                Clear Text
              </button>
            </div>
          </div>

          <div className="container mt-5">
            <h4>Your Text Summary</h4>
            <h5>
              {text.split(" ").length} Words and {text.length} Characters
            </h5>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
          </div>

          <div className="container mt-4">
            <h4>Preview</h4>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
