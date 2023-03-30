
import React , {useState} from 'react'

export default function TextForm(props) {
  const handelUpclick = ()=>{
    // console.log("upperCase was clicked")
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Conveted to UpperCase","success")
  }

  const handelLoclick =()=>{
    // console.log("Lowercase Click ")
    let lower= Text.toLowerCase();
    setText(lower)
    props.showAlert("Conveted to LowerCase","success")
  }

  const handelSpechclick = ()=>{
    // console.log("Yayyah spech working r")
    let msg =  new SpeechSynthesisUtterance();
    msg.text = Text;
    window.speechSynthesis.speak(msg)
    props.showAlert("You click Speech","success")
  }
  const handelReversclick = ()=>{
    // convert string to array 
    let strArr = Text.split("")

    // Revers Aaray 
     strArr= strArr.reverse();

    // convert aaray to string 
    let newText = strArr.join("");

    setText(newText)
    // console.log(newtext)
    props.showAlert("Cicked on Rervers","success")
  }


    const handelCopyclick =()=>{
      // get the text Field
      let copyT = document.getElementById("myBox");
      copyT.select();
      
      navigator.clipboard.writeText(copyT.value);
      props.showAlert("Text Copied to clipboard","success")
    }

    const handelExtraSclick =()=>{
      let newText = Text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces","success")
    }




  const heandaleonchange = (event )=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const [Text , setText] = useState('')
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white' : 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      
      <textarea className="form-control" onChange={heandaleonchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white' : 'black'}} value={Text} id="myBox" rows="8" placeholder='Enter Your Text Here'></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handelUpclick} id="btn1">COnvert To Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handelLoclick}>COnvert To Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handelSpechclick}>Speech </button>
      <button className="btn btn-primary mx-1" onClick={handelReversclick}>Revers  </button>
      <button className="btn btn-primary mx-1" onClick={handelCopyclick}>Copy Text  </button>
      <button className="btn btn-primary mx-1" onClick={handelExtraSclick}>Remove ExtraSPaces</button>
    </div>
<hr style={{color:props.mode==="dark"?'white':'black'}}  / >
    <div className="container" style={{color:props.mode==='dark'?'white' : 'black'}}>
      <h1>Your Text Summary</h1>
      <p>{Text.split( " " ).length} words and {Text.length} characters </p>
      <p>{ 0.008 *  Text.split( " " ).length}Minutes to read </p>
      <h2>Preview</h2>
      <p>{Text}</p>
    
    </div>

    </>
  )
}
