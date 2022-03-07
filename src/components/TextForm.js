import React,{useState} from 'react';

export default function TextForm(props){
const [text, setText] = useState();    
const handleOnUppercase = ()=>{
 console.log("handleOnClick....");   
    setText(text.toUpperCase()); 
}
const handleOnChange = (event)=>{
    console.log("handkeOnChange....");
    setText(event.target.value);
}

const handleOnLowercase = ()=>{
  setText(text.toLowerCase());    
}

return(    
    <div>
        <div>
            <h1>Textarea :</h1>
            <textarea id="mybox" value={text} onChange={handleOnChange}></textarea>
            <br/>
            <button type="button" onClick={handleOnUppercase}>Convert To Uppercase</button>
            <button type="button" onClick={handleOnLowercase}>Convert To Lowercase</button>
        </div> 
        <br/>
        <br/>
        <div>
            <h1>Your Text Summary:</h1>
            <p>{text}</p>
        </div>
    </div>
  );
}
