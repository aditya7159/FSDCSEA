// eslint-disable-next-line no-unused-vars
import React from 'react'
import Student from './Student'
import logo from "../src/assets/logo.jpeg"

function App() {
  let a = 12
  const myStyle = {
    backgroundColor: "black"
  }

  const myStyle2 = {
    color: "red",
    backgroundColor: "black",
    padding: "10px 20px",
    width: "fit-content"
  }

  const studentData=[{
    college:"ABES Engineering College",
    pic: logo,
    name:"Aditya Singh",
    roll:"09",
    branch:"CSE",
    section:"A", 
  },
  {
    college:"ABES Engineering College",
    pic: logo,
    name:"Aditya Singh",
    roll:"56",
    branch:"CSE",
    section:"A", 
  },
  {
    college:"ABES Engineering College",
    pic: logo,
    name:"Aditya Singh",
    roll:"41",
    branch:"CSE",
    section:"A", 
  }
];

  return (
    <>
      <div style={myStyle2}>Abes Engineering college
        <div style={myStyle}>{a}</div>
      </div>
      <div style={{backgroundColor: "cyan", display:"flex"}}>
        <Student data={studentData[0]}/>
        <Student data={studentData[1]}/>
        <Student data={studentData[2]}/>


        {/* <Student college="Abes Engineering College" 
        pic={<img src={logo} height={100} width={100}/>}
        roll='09' name='Aditya Singh' branch='CSE' section="A"/>

<Student college="Abes Engineering College" 
        pic={<img src={logo} height={100} width={100}/>}
        roll='09' name='Aditya Singh' branch='CSE' section="A"/>

<Student college="Abes Engineering College" 
        pic={<img src={logo} height={100} width={100}/>}
        roll='09' name='Aditya Singh' branch='CSE' section="A"/>


<Student college="Abes Engineering College" 
        pic={<img src={logo} height={100} width={100}/>}
        roll='09' name='Aditya Singh' branch='CSE' section="A"/> */}

        
      </div>
    </>
  )
}

export default App