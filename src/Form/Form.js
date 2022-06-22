

import { useState } from "react";
import '../style.css'

const Form = (props) => {

const infoParent = props.parentChild;


console.log({infoParent})

const [name, changeName] = useState('');
const [lastName, changeLastName] = useState('');

const nameHandler = (event) => {
changeName(event.target.value);

}
const lastNameHandler = (event) =>{
    changeLastName(event.target.value)

}

const clickHandler = (event) => {
    event.preventDefault();
    props.transferValue(name +" "+ lastName);
    console.log('From form.js')
    
 

}

    return(
       
        <div className='justify'>
        <form onSubmit = {clickHandler}>
            <label>enter first name: </label>
            <input type='text' onChange = {nameHandler} value={name} ></input>
            <br/>
            <label>enter last name</label>
            <input type='text' onChange = {lastNameHandler} value={lastName}></input>
            <button>Enter</button>
         
        </form>
<p>{infoParent}</p>
        </div>
    );
}
export default Form;