import React,{ useState  } from "react";

export default function TextForm(props) {
  const handleUpClick=()=>{
      console.log("UpperCase"+ text);
      let newText= text.toUpperCase();
      setText(newText)
      props.showAlert("Uppercase has been enabled","success")

  }
  const handleLoClick=()=>{
      console.log("Lowercase"+ text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Lowercase has been enabled","success")

  }
  const handleClearClick=()=>{
      console.log("Clear"+ text);
      let newText= "";
      setText(newText)
      props.showAlert("Clear has been enabled","success")

  }
  const handleSpeakClick=()=>{
      console.log("Speak "+ text);
      let utterance = new SpeechSynthesisUtterance();
      utterance.text=text;
      window.speechSynthesis.speak(utterance);
      props.showAlert("Speak has been enabled","success")
  }
  const handleReverseClick=()=>{
      let splitword= text.split(" ");
      let reverse= splitword.reverse(" ");
      let joined= reverse.join(" ");
      let newText= joined;
      setText(newText)
      props.showAlert("Reverse has been enabled","success")
  }


  const handleOnChange=(event)=>{
    console.log("OnChange");
    setText(event.target.value)
  }
  const[text,setText]= useState("Enter text here")
  
  return (
    <>
    <div className="container" style={{color: props.mode==="dark" ? "#fff":"#042743"}}>
      <h1 className="my-2">{props.heading}</h1>
      <div className="mb-3">
        <textarea value={text} className="form-control"  onChange={handleOnChange} style={{
          backgroundColor: props.mode==="light" ? "white":"gray",color: props.mode==="dark" ? "#fff":"#042743" }} id="myBox" rows="9" ></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-3 my-3"  onClick={handleUpClick}> Convert to Uppercase</button>
      <button type="button" className="btn btn-primary mx-3"  onClick={handleLoClick}> Convert to Lowercase</button>
      <button type="button" className="btn btn-primary mx-3"  onClick={handleClearClick}>Clear</button>
      <button type="button" className="btn btn-primary mx-3"  onClick={handleSpeakClick}>Speak</button>
      <button type="button" className="btn btn-primary mx-3"  onClick={handleReverseClick}>Reverse the sentence</button>
    </div>
    <div className="container" style={{color: props.mode==="dark" ? "#fff":"#042743"}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008 *text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text: "Enter in the textbox to preview it here"}</p>
    </div>

    </>
  );
}
