import { useState } from "react";
import "./styles.css";
import React from "react";

const emojiDictionary = {
  "🍇": "grapes",
  "🍈": "melon",
  "🍉": "watermelon",
  "🍑": "peach",
  "🍐": "pear",
  "🍏": "green apple",
  "🍎": "apple",
  "🥭": "mango",
  "🍍": "pineapple",
  "🍌": "banana",
  "🍋": "lemon",
  "🍊": "orange"
};

var emojisWeKnow = Object.keys(emojiDictionary);

/* 
Taking out value out of an object is easier than traversing all indices if an array*/

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value; //input
    var meaning = emojiDictionary[userInput]; // processing
    // when we know the key whose pair is to be found out from the object,
    // then we access it like this emojiDictionary.key1 ,
    // but here we dont know which key the user is going to give as input , so using [userInput]

    // if value of var meaning is not found in dictionary object, it will return the value as 'not defined', so -
    if (meaning === undefined) {
      meaning = "Oops! couldn't find this in our database";
    }

    setMeaning(meaning); // React call to show Output
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // React call to show Output
  }

  return (
    <div className="App">
      <h1>Fruits Dictionary</h1>
      <p>
        To start typing emoji on laptop, press (Windows logo + .) keys together.
      </p>
      <br />
      <input onChange={inputChangeHandler}></input>

      <div>
        <br /> <h3> {meaning}</h3> {/* React output with useState  */}
      </div>

      <div>
        <h4> Fruits we know</h4>{" "}
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2 rem",
                padding: "0.5 rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* -- ALTERNATIVE APPROACH (finding if a key is present in the object or not) --
const emojis = Object.keys(emojiDictionay),

export default function App(){
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation will appear shortly");

  function changeHandler(event){
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary){
      setMeaning(emojiDictionary[inputEmoji]);
    }
    else {
      setMeaning("failure to recognize this emoji");
    }
  }

  function emojiClickHnadler(inputEmoji){
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    
    <div className="App"> 
    <h1> inside out </h1> 

    <input onChange={emojiInputHandler} />
    <h2> {meaning} </h2>
    </div>
  );

}
*/
