import React, { useContext, useState } from 'react'
import MyContext from '../Context/MyContext';
import alldata from "./AllData.json"
// import {nanoid} from 'nanoid';
// const ownid=

const Addtask = (props) => {
  const [data,setdata]=useState({
    id:alldata>0?alldata.length+1:null,
    title: '',
    description: '',
    team: '',
    assignee: '',
    priority: '', 
    status: 'pending'
  });
  const {setuser,setmydata,user}=useContext(MyContext);
  setmydata(data);
    const handledata=(e)=>{
      const {name,value}=e.target;
        const newformdata={...data};
        newformdata[name]=value;
        setdata(newformdata)
       
    }
    const handleOnsubmit=(e)=>{
      
      e.preventDefault();
     const newdata={
      id:data.id,
      title: data.title,
      description: data.description,
       team: data.team,
      assignee: data.assignee,
        priority: data.priority, 
       status: data.status
     }
     setuser(prevUser => [...prevUser, newdata]);
    props.setpopup(false)
    console.log(user)

    }
    
  return (
    <div>
        <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

   
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title"> {props.showedit?"EDIT TASK":"CREATE A TASK"}</h4>
      </div>
      <div class="modal-body mbody">
        <form action="" method="post">
        <label>Title :         </label>
        <input type="text" name='title' value={data.title} onChange={(e)=>handledata(e)}></input><br/>
        <label >Description :  </label>
        <textarea rows='2' cols="20"  name='description' value={data.description} onChange={(e)=>handledata(e)} type="text"></textarea><br/>
        <label>Team :          </label>
        <input type="text" name='team' value={data.team} onChange={(e)=>handledata(e)}></input><br/>
        <label >Assignee :      </label>
        <input type="text" name='assignee' value={data.assignee} onChange={(e)=>handledata(e)}></input><br/>
        <label>Priority :       </label>
        <input type='text'  list='browsers' name='priority' value={data.priority} onChange={(e)=>handledata(e)} placeholder='Priority' />
            <datalist id='browsers'>
            <option value='P0'></option> <option value='P1'></option><option value='P2'></option>
            </datalist>
        {props.showedit?<><label htmlFor="">Status</label><input type='text' list='status' name='status' placeholder='status' onChange={(e)=>handledata(e)}/><datalist id='status'>
            <option value='pending'></option> <option value='InProgress'></option><option value='Completed'></option><option value='Deployed'></option><option value='Deffered'></option>
            </datalist></>:null}
            </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-default" data-dismiss="modal" onClick={(e)=>handleOnsubmit(e)}>{props.showedit?"update":"Submit"}</button>
      </div>
    </div>

  </div>
</div>
      
    </div>
  )
}

export default Addtask
