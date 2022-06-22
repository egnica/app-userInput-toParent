
import './App.css';
import Form from './Form/Form';
import { useState } from 'react';
function App(props) {
const [input, changeInput] = useState()

let infoFromApp = 'info from App.js (Parent to Child)'

console.log(props);
const inputHandler = (value) => {
  changeInput(value);
 
}


  return (
    <div className="App">
      <Form parentChild={infoFromApp} transferValue = {inputHandler}/>
      <p>{input}</p>
      <p></p>
    </div>
  );
}

export default App;
