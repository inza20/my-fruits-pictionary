import { useState } from "react";
import "./styles.css";
import React from "react";

var headingText = "Jsx component";
var bgcolor = "red";
var likeCounter = 0;

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1; //input
    setLikeCounter(newLikeCounter); // processing

    console.log("clicked", newLikeCounter);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2 style={{ backgroundColor: bgcolor }}> {headingText} </h2>
      <button onClick={likeClickHandler}> Like </button>
      <span> {likeCounter} </span>
      {/* output */}
    </div>
  );
}

/* things to notice
class -> className
style -> takes an object instead of ""
VISER -> View -> Interact -> State in Event Handler -> Render
*/
