import React, { useContext, useState } from 'react'
import "./CSS/Task.css"
import menu from "../Images/menu.png"
import Addtask from './Addtask';
import MyContext from '../Context/MyContext';
const Task = (props) => {
  
  const {user}=props
  const [active ,setactive]=useState(null);
  const[showedit,setshowedit]=useState(null);
  const[editid,seteditid]=useState(2)
  const[del,setdel]=useState(null);
  const handleActive=()=>{
    setactive(true)
  }
  const handleedit=(id)=>{
    seteditid(id)
    setshowedit(true)
     setactive(false)
  }
  const {setuser,mydata}=useContext(MyContext);
  const handleDelete = () => {
    setdel(true)
  }
  const handleYes=(id)=>{
    debugger
    const filteredTasks = user.filter(task => task.id !== id);
    console.log(filteredTasks)
    setuser(filteredTasks);
    setdel(false);
  }
  return (
    user.map((u,id)=>{
      console.log(user,mydata)
      return(<div className='task' key={id}>
      <div className='tasktitle'>
        <h4>{u.title}</h4>
        <button className='taskpriority'>{u.priority}</button>
      </div>
      <hr />
      <div className='taskbody'>
          <p className='taskdescription'>{u.description} </p>
          <div className='middle'>
          <p className='assignperson'> @{u.assignee}</p>
          <div className='menu'>
          <img src={menu} alt='not_found' className='img' onClick={handleActive}></img>
          {active && editid===id?
          <div className='isactive'>
            <p className='edit' onClick={()=>handleedit(id)} data-toggle="modal" data-target="#myModal">Edit</p>
            <hr></hr>
            <p className='delete' onClick={handleDelete} data-toggle="modal" data-target="#myModal">Delete</p>
          </div>
          :null}
          </div>
           </div>
           {showedit?<Addtask active={active} showedit={showedit} user={user}/>:null
          }
         {del?<div id="myModal"  class="modal fade" role="dialog">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times;</button>
      <h4 class="modal-title"> DELETE TASK</h4>
    </div>
    <div class="modal-body mbody">
     <p>Do You Wish To Delete Task ?</p>  
      Task1
      <button type="button" class="btn btn1" data-dismiss="modal" onClick={()=>handleYes(id)}>Yes</button>
      <button type="button" class="btn btn1" data-dismiss="modal">No</button>
      </div>
  </div>

</div>
</div>:null}
          <button className='task-status'>{u.status}</button>

      </div>
  </div>
)
    }))
  }


export default Task
