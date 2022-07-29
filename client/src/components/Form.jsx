import React , {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Display from './Display'

function Form() {
  const [myForm , setMyForm]=useState({
    firstName:"",
    surname:""
  })
  const [display ,setDisplay] = useState([])

  const handleChange = (e) => {
    setMyForm({
    ...myForm, [e.target.name]:e.target.value
    })
  }

  console.log('display', display)

  const handleSubmit = (e) => {
    e.preventDefault();
    const {firstName , surname} = myForm

   if(firstName && surname){
        const {firstName , surname} = myForm
        myForm.id = uuidv4()

    setDisplay([...display , myForm])
   }
  }

  const handleDelete = (id) => {
    console.log('id2', id)
    let filteredList = display.filter(item => item.id !== id)
    setDisplay(filteredList)

  }




const {firstName , surname} = myForm
  return (
    <div className='App'>
      <h1>Register</h1>
<form onSubmit={handleSubmit}>
  <div className='inputContainer'>
  <label>First name</label>
      <input name="firstName" type="text" value={firstName} onChange={(e)=> handleChange(e)} placeholder='Name'/>
      </div>
<div className='inputContainer'>
      <label>Last name</label>
      <input name="surname" type="text" value={surname} onChange={(e)=> handleChange(e)}  placeholder='Surname'/>
      </div>
      <div className='buttonContainer'>
      <input type="submit"/>
      </div>
      </form>
      <Display  display={display} handleDelete={handleDelete}/>
    </div>
  )
}

export default Form