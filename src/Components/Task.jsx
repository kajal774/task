import React, { useContext, useState } from 'react'
import "./CSS/Task.css"
import Addtask from './Addtask';
import MyContext from '../Context/MyContext';
import img1 from "../Images/edit.svg";
import img2 from "../Images/delete.svg"
const Task = (props) => {
  
  const {setuser,user,seteditformdata,editfromdata}=useContext(MyContext);
  const[showedit,setshowedit]=useState(false);
 
  const[del,setdel]=useState(null);
  const handleedit=(e,u)=>{

    setshowedit(true) 
    seteditformdata({
      id:u.id,
      title: u.title,
      description: u.description,
       team: u.team,
      assignee: u.assignee,
        priority: u.priority, 
       status: u.status
    })
  }
  
  const handleDelete = () => {
    setdel(true)
  }
  const handleYes=(e,u)=>{
    e.preventDefault();
    const newdata=[...user];
    const index=user.length>1?user.findIndex((data)=>data.id===u.id):u.id;
   newdata.splice(index,1)
    setuser(newdata)
    setdel(false);
  }
  const handleclose=()=>{
    props.setpopup(false)
    setshowedit(false);
    
  }
  return (
    props.user.map((u,id)=>{
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
            <img className='edit' src={img1} alt='not found' onClick={(e)=>handleedit(e,u)} data-toggle="modal" data-target="#myModal"></img>
            <hr></hr>
            <img className='' src={img2} style={{"height":"2.1em","width":"2.1em"}} alt='not found' onClick={handleDelete} data-toggle="modal" data-target="#myModal"></img>
          </div>
           </div>
           {showedit?<Addtask  handleclose={handleclose} showedit={showedit} setshowedit={setshowedit}user={user} editfromdata={editfromdata}/>:null
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
      <button type="button" class="btn btn1" data-dismiss="modal" onClick={(e)=>handleYes(e,u)}>Yes</button>
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
