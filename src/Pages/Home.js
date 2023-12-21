import React, { useState } from 'react'
import './Home.css'
function Home() {

  const [task, setTask] = useState([])
  const [value, setValue] = useState('')
  const [btnName, setBtnName] = useState('ADD')
  const [select,setSelect]=useState()

  //use spread ,callback func,simply add val
  const handleItem = () => {
    if (btnName === 'ADD') 
    {
      setTask((olditem) => {
        return [...olditem, value]
      })
    }
    else 
    {
      setTask((olditem) => {
       olditem.splice(select,1,value)//splice is mutable
       return[...olditem]
      })
    }
    setBtnName('ADD')
    setValue('')
}
const handleInput = (e) => {
  // e.stopPropagation()
  setValue(e.target.value)
}
//use filter
const handleDelete = (e, index) => {
  setTask((olditem) => {
    let yo = olditem.filter((p, i) => i !== index) //its immutable
    return [...yo]
  })
}
//for update use splice ()
const handleUpdate = (e, index) => {
  setBtnName('EDIT')
  setValue(task[index])
  setSelect(index)
}

return (
  <div className='main_body'>
    <div className='text'>TO</div>
    <div className='title'>ToDo</div>

    <div className='card'>
      <div className='top_sec'>
        <input type='text' placeholder='Enter Task' value={value} onChange={(e) => handleInput(e)} className='input_field'></input>
        <button className='add_btn' onClick={handleItem} type='submit'>{btnName}</button>
      </div>
      <div className='item_sec'>
        <ul>
          {task.map((p, index) =>
            <li key={index}>
              <div className='item' >
                <span className='task_name'>{p}</span>
                <span className='task_edit' onClick={(e) => handleUpdate(e, index)}>?</span>
                <span className='task_del' onClick={(e) => handleDelete(e, index)}>X</span>
              </div>
            </li>)}
        </ul>
      </div>
    </div>
    <div className='text do'>DO</div>

  </div>
)
}

export default Home