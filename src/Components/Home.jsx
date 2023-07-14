import React from 'react'
import { useState } from 'react';

const Home = () => {
    const [ message1, setMessage1] = useState("");
    const [ message2, setMessage2] = useState("");
    const [ message3, setMessage3] = useState("");
    const [ message4, setMessage4] = useState("");
    const [ message5, setMessage5] = useState("");


    const [ showbutton1, setShowButton1] = useState(false);
    const [ showbutton2, setShowButton2] = useState(false);
    const [ showbutton3, setShowButton3] = useState(false);
    const [ showbutton4, setShowButton4] = useState(false);


    
    const handleFirstButtonClick = () => {
        setMessage1("Hi babe");
        setShowButton1(true);
      };
    
      const handleSecondButtonClick = () => {
        setMessage2("Hows your day so far?")
        setShowButton2(true);
      };

      const handleThirdButtonClick = () => {
        setMessage3("All Okay?")
        setShowButton3(true);
      };

      const handleFourthButtonClick = () => {
        setMessage4("Here's a message")
        setShowButton3(true);
      };

      const handleFifthButtonClick = () => {
        setMessage4("I LOVE YOU!!")
      }

  return (
    <>
    <center>
<div style={{ backgroundImage: `url(${require('../Images/img1.jpg')})`, backgroundRepeat: 'repeat-x'}}>
  <button style={{color:'white', backgroundColor: 'red', width: "100px",borderRadius: "40px"}} onClick={handleFirstButtonClick}>Please Click me!</button>
  <h1>{message1}</h1>
  {showbutton1 && (
    <button style={{color:'white', backgroundColor: 'red', width: "100px",borderRadius: "40px"}} onClick={handleSecondButtonClick}>Again</button>
  )}
  <h1>{message2}</h1>
  {showbutton2 && (
    <button style={{color:'white', backgroundColor: 'red', width: "100px",borderRadius: "40px"}} onClick={handleThirdButtonClick}>Pleasseeeee!</button>
  )}
  <h1>{message3}</h1>
  {showbutton3 && (
    <button style={{color:'white', backgroundColor: 'red', width: "100px",borderRadius: "40px"}} onClick={handleFourthButtonClick}>Once more!</button>
  )}
  <h1>{message4}</h1>
  {showbutton4 && (
    <button style={{color:'white', backgroundColor: 'red', width: "100px",borderRadius: "40px"}} onClick={handleFifthButtonClick}>Pleeesshhh..Innond sati!</button>
  )}
  <h1>{message5}</h1>
</div> 
</center>
    </>
  )
}

export default Home
