import React,{useState} from "react";
// import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState('Enter your text here')
  const handleUPClick =()=>{
    // console.log('Uppercase button clicked');
    let upper = text.toUpperCase()
    setText(upper)
    props.showalert("Text Converted to uppercase","success")
  }
  const handleLowClick = ()=>{
    let lower = text.toLowerCase()
    setText(lower)
    props.showalert("Text Converted to lowercase","success")
  }
  const clearonclick =()=>{
    setText("")
    props.showalert("Textarea has been cleared","success")
  }
  const handleOnChange =(event)=>{
    
    setText(event.target.value)
  }
  console.log(props.mode)
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}} >
        <h1 >{props.heading}</h1>
     <div className="mb-3">
       
        <textarea 
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}

          style={{backgroundColor: props.mode==="dark"?"grey":"white",color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
    <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert To uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clearonclick}>Clear</button>
    </div>
    <div className="conatainer my-3" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}


