
import './App.css';
import React,{useState}  from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


// import About from './components/About';

// import Header from './components/Header';
// import Left from './components/Left';
// import Rigth from './components/Rigth';
 

// class App extends React.Component {
//   render(){
    // const name = <span>Piyush</span>
    function App() {
      
    
    const [mode,setMode]= useState('light');   //Whether Dark Mode is oN or Not 

    const [alert,setAlert]=useState(null)

    const [color,setColor] = useState('blue')

    const changeP=()=>{
      setColor('#953DC4')
      document.body.style.backgroundColor="#953DC4"
      showAlert("Purpul theme On ",'success')
    }
    const changeB=()=>{
      
      setColor('blue')
      document.body.style.backgroundColor="#7EC8E3"
      showAlert("Blue Theme On",'success')
    }
    const changeR =()=>{
      // const re= document.getElementById("btn1")
      
        setColor('red')
        document.body.style.backgroundColor="red"
       showAlert("Red Theme On",'success')
      //  re.style.color='red'
       
      }
      const changeG=()=>{
        setColor("green")
        document.body.style.backgroundColor="#3cb371"
        showAlert("Green Theme On",'success')

    }

    const showAlert=(message,type)=>{
      setAlert({
        msg :message,
        type:type

      })

      setTimeout(() => {
        setAlert(null)
      }, 1000);
    }

    const toggleMode =()=>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor="#13466e"
        showAlert("Dark Mode is Enable","success")
        // document.title="textutil Dark Mode"
        // setInterval(() => {
        //   document.title="instal Textutil now"

        // }, 1000);
        // setInterval(() => {
        //   document.title=" TextUlitle is amazing mode"
        // }, 2000);
      }
      else{
        setMode('light')
        document.body.style.backgroundColor="white"
        showAlert("ligth   Mode is Enable","success")
        // document.title="textutil Light Mode"
      }
    }
    return(
  <>
  <BrowserRouter>
  <Navbar  title="TextUtils" home="PBHome" aboutText='About Us' color={color} changeP={changeP} changeB={changeB } changeR={changeR} changeG={changeG} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <TextForm heading="Enter the text to analyze Below" showAlert={showAlert} mode={mode}/> */}
      <Routes>
        <Route path="/" element={<TextForm heading="Try - TextUtile Word Count | cheracter Count | Remove ExtraSpaces | LowerCase to UpperCase |UpperCase to LowerCase " showAlert={showAlert} mode={mode}/>} />
          <Route path="/about" element={ <About mode={mode}/>} />
      </Routes>
    </BrowserRouter>
      </>

      // <div>
      // <Header name='Piyush'/>
      // <Header name='Biyush'/>
      // <Header name='Riyush'/>
      // <Header name='Kiyush'/>
      // <h1 style={{textAlign:'center'}}>THis is a classs Component</h1>
      // <Rigth />
      // <Left  />
      // </div>
      // {/* {name} */}
      //   {/* {rr} */}
      //   {/* {address} */}
      //    {newElement}   
    
    )
  }




// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Piyush , {name}</h1>
//       {newElement}
//       
      
//     </div>
//   );
// }


export default App;
