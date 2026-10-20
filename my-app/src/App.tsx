import './App.css'

function App() {
  return (
    <>       
          <h1>Get started</h1>
          <Person></Person>
          <Std></Std>
          <Students></Students>
          <Student name='Jahirul Islam' gpa="3.43"></Student>
          <Student name='Mahatab' gpa="3.76"></Student>
          <Student name='Munim' gpa="3.73"></Student>
          <Student></Student>
    </>
  )
}





function Person(){
  return(
    <>
    <h2>amr mission Start Naw</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, quibusdam.</p>
    </>
  )
}
//css
function Student(props){
  console.log('Inside the student components',props)
  console.log(props.name)
  return(
    <div style={{
    border:'2px solid red',
    borderRadius: '10px',
    marginTop: '2px'
    }}>
      <h3>Name: {props.name}</h3>
      <p>Grades: {props.gpa}</p>
    </div>
  )
}


function Std(){
  const studentName:string = "Mahatab"
  const type2Style={
    border:'2px solid red',
    color:'red'
  }
  return(
    <div style={type2Style}>
      <h1>Na Deke Practice...</h1>
      <h2> Hello, {studentName}</h2>
      <p>Welcome to React.</p>
    </div>
  )
}

function Students(){
  const name:String = "Munim"
  const num:number = 34
  return(
    <div className='type1'>
    <h4>Student Sections </h4>
    <p>Some 1, Total Sum: {2+3}</p>
    <p>Some 2 Name: {name}</p>
    <p>Some 3 Numbrt ar sate Sum {num+1}</p>
    <p>Some 4</p>
    <p>Some 5</p>
    </div>
  )
}
export default App
