import React, { useState } from 'react'
// import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import {faTrashCan,faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import './main.css'



export default function Todo() {
    const[val,setValue] = useState('');
    const[todo,setTodo] = useState([{
        taskName: 'here i am abubakar'
    }]);

   function allDelete(){
    setTodo([]);
   }

    const addTask = (e)=>{

       setTodo([...todo,{taskName: val }]);
e.preventDefault();
        console.log('running');
        console.log(todo);
    }

    function change (e) {
      setValue(e.target.value);
    }
    return (
        <div className="container">
            <h1><FontAwesomeIcon icon={faCircleCheck} style={{color:'green'}}/> Todo App</h1>
            <form className="main">
                <input type="text" value={val} onChange={change} className="form-control" id="exampleInput" />
                <button className="btn btn-outline-dark"  onClick={addTask}>Add me</button>
            </form>
<br />
                {/* {todo.length > 0 ? 
                (
                    <ul className='tasks'>
                    <h1>hel</h1> 
                {
                    
                    todo.map((v,i)=>{
                        <li key={i}>
                            <div>
                                <input type="text" defaultValue={v.taskName} />
                            </div>
                        </li>
                    })
                }
            </ul>
                ):

       (<p>No tasks available.</p>)
            } */}

{todo.length > 0 ? (
        <ul className="tasks">
          <button onClick={allDelete} className="btn btn-danger">Delete All</button>
          {todo.map((v,i) => (
            <li key={i}>
              <div className='list-item my-2'>
                <input 
                  type="text" className='form-control'
                  defaultValue={v.taskName}
                />
                <button onClick={()=>{
                  const todoArr = [...todo];
                  todoArr.splice(i,1);
                  setTodo(todoArr);
                }} className='btn btn-danger ms-2'>
                  <FontAwesomeIcon icon={faTrashCan}/> delete</button>

<button onClick={()=>{
                  const todoArr = [...todo];
                  todo.splice(i,1,{...v});
                  setTodo([...todo]);
                }} className='btn btn-outline-success mx-2'>
                  <FontAwesomeIcon icon={faPenToSquare}/> edit</button>

              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}







        </div>

     
    )
}
