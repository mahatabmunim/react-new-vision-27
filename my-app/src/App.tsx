import './App.css'
// import Todo from './Todo'
import Task from './Task'
import ProfileName from './Profile'

import Test from './Test'

function App() {
  return (
    <>   
        <h1>My React</h1>
        <ProfileName name='Facebook done' isDone={true}></ProfileName>
        
        {/* <Task name="finish module" isDone={false}></Task>    
        <Task name="Facebooking Time Wasting" isDone={true}></Task>    
        <Task name="Mobile Charge dibo" isDone={false}></Task>     */}



          {/* <h1>Get started</h1> */}
          {/* <Todo Task='practice coding' time='5.00'></Todo>
   */}
          {/* <Person></Person>
          <Std></Std>
          <Students></Students>
          <Student name='Jahirul Islam' gpa="3.43"></Student>
          <Student name='Mahatab' gpa="3.76"></Student>
          <Student name='Munim' gpa="3.73"></Student>
          <Student></Student> */}
          {/* <Developer Language="Java" Expreance= "4 years"></Developer>
          <Developer Language="Python" Expreance="5 years"></Developer> */}

          {/* <Basa name="Amader Poribar" KalarNam="Rekha Banu"></Basa>
          <Basa name="Amader Poribar" KalarNam="Rekha"></Basa> */}

          {/* <Munim name="Mahatab" role="Frontend Developer" button="View Profile"></Munim>
          <Munim name="Mahatab" role="Frontend Developer" button="View Profile"></Munim> */}

    </>
  )
}



// function Munim(props){
//   return(
//     <div className='profile-card'>
//       <h2>Name: {props.name}</h2>
//       <p>Role: {props.role}</p>
//       <button>{props.button}</button>
//     </div>
//   )
// }

// function Basa(props){
//   return(
//     <div className='student'>
//       <h4>Basar Nam: {props.name}</h4>
//       <p>Buar nam: {props.KalarNam}</p>
//     </div>
//   )
// }

// function Developer(props){
//   return(
//     <div className='student'>
//       <h4>Programmming Language: {props.Language}</h4>
//       <h4>Expreance: {props.Expreance}</h4>
//     </div>
//   )
// }



// function Person(){
//   return(
//     <>
//     <h2>amr mission Start Naw</h2>
//     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.</p>
//     </>
//   )
// }
// //css
// function Student(props){
//   console.log('Inside the student components',props)
//   console.log(props.name)
//   return(
//     <div style={{
//     border:'2px solid red',
//     borderRadius: '10px',
//     marginTop: '2px'
//     }}>
//       <h3>Name: {props.name}</h3>
//       <p>Grades: {props.gpa}</p>
//     </div>
//   )
// }


// function Std(){
//   const studentName:string = "Mahatab"
//   const type2Style={
//     border:'2px solid red',
//     color:'red'
//   }
//   return(
//     <div style={type2Style}>
//       <h1>Na Deke Practice...</h1>
//       <h2> Hello, {studentName}</h2>
//       <p>Welcome to React.</p>
//     </div>
//   )
// }

// function Students(){
//   const name:String = "Munim"
//   const num:number = 34
//   return(
//     <div className='type1'>
//     <h4>Student Sections </h4>
//     <p>Some 1, Total Sum: {2+3}</p>
//     <p>Some 2 Name: {name}</p>
//     <p>Some 3 Numbrt ar sate Sum {num+1}</p>
//     <p>Some 4</p>
//     <p>Some 5</p>
//     </div>
//   )
// }


export default App
