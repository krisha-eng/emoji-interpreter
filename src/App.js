import React, { useState } from "react";
import "./styles.css";
import "./emojis.js";

const emojiDictionary = require("./emojis.js");
// console.log(emojiDictionary);

export default function App() {
  // var likeCounter = 0;
  // const [likeCounter, setlikeCounter] = useState(0);
  const [emojiMeans, setemojiMeans] = useState("");
  const emojiList = Object.keys(emojiDictionary);

  function onClickHandler(emoji) {
    // setlikeCounter(likeCounter + 1);
    // console.log(emoji);
    setemojiMeans(emojiDictionary[emoji]);
  }

  function onChangeHandler(evt) {
    // console.log(evt.target.value);
    var emojiInput = evt.target.value;
    // console.log(emojiDictionary[emojiInput]);
    setemojiMeans(emojiDictionary[emojiInput]);
    // console.log(Object.keys(emojiDictionary));
  }

  return (
    <div className="App">
      <h2>Emoji Interpreter</h2>
      {/* <p>
        Welcome <span style={{ color: color1 }}>{name}</span>
      </p> */}
      <small>Type in or select from list to get emoji meanings</small>
      <div>
        <br />
        <input
          onChange={onChangeHandler}
          style={{ width: 200, height: 20 }}
        ></input>
      </div>
      <br />
      <div className="div-meaning">{emojiMeans}</div>
      <br />
      <div>
        {emojiList.map((item) => (
          <span onClick={() => onClickHandler(item)} style={{ fontSize: 40 }}>
            {item}
          </span>
        ))}
      </div>

      {/* <button onClick={onClickHandler}>Like Me!</button>
      <div>{likeCounter} </div> */}
      {/* <p> {String.fromCodePoint(0x1f525)} </p> */}
    </div>
  );
}
