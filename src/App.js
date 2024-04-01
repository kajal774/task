
import DateRangePicker from "./Components/DateRangePicker"
import './App.css';
import Task from './Components/Task';
import { useContext, useState } from "react";
import Addtask from "./Components/Addtask";
import Header from "./Components/Header";
import MyContext from "./Context/MyContext";


function App() {
  const [popup,setpopup]=useState(false);
  const {user}=useContext(MyContext);
  const[fname,setfname]=useState("")

  const handleAdd=()=>{
    setpopup(true)

  }
  const handleFilterAssigneName=(e)=>{
setfname(e.target.value);   
    
  }

  return (
   
    <div className="App">
     <Header/>
      <div className='innerbody'>
        <div className='top'>
          <div className='fliters'>
            <div className="filterby">
          Filter By: <input type='text' placeholder='Assignee Name' name="faName" value={fname} onChange={(e)=>handleFilterAssigneName(e)}></input>
          <input type='text'  list='browsers' placeholder='Priority' />
            <datalist id='browsers'>
            <option value='P0'></option> <option value='P1'></option><option value='P2'></option>
            </datalist>
            <div className="date"><DateRangePicker /></div></div>
            <br></br>
          Sort By: <input type='text'  list='browsers' placeholder='Priority' />
            <datalist id='browsers'>
            <option value='P0'></option> <option value='P1'></option><option value='P2'></option>
            </datalist>
          </div>
          <div>
        <button type="button" class="addtask" data-toggle="modal" data-target="#myModal" onClick={handleAdd}>Add New Task</button>
        {popup?<Addtask setpopup={setpopup}/>: null}
          </div>
        </div>
        <div className='bottom'>

          <div className='divs'>
          
      
        <h5 className='div1'>Pending</h5>
        {user.filter((i) => i.status === "pending").length > 0 ? 
        <div className='divtask'>
          <Task user={user.filter((i) => i.status === "pending")} />
        </div>
    
    : null}
            </div>
          <div className='divs'>
          
      
        <h5 className='div2'>In Progress</h5>
        {user.filter((i) => i.status === "InProgress").length > 0 ?
        <div className='divtask'>
          <Task user={user.filter((i) => i.status === "InProgress")} />
        </div>: null}
            </div>
          <div className='divs'>
          
    
        <h5 className='div3'>Completed</h5>
        {user.filter((i) => i.status === "Completed").length > 0 ? 
        <div className='divtask'>
          <Task user={user.filter((i) => i.status === "Completed")} />
        </div>: null}
            
            </div>
          <div className='divs'>
          
        <h5 className='div4'>Deployed</h5>
        {user.filter((i) => i.status === "Deployed").length > 0 ?
        <div className='divtask'>
          <Task user={user.filter((i) => i.status === "Deployed")} />
        </div>: null}
            </div>
          <div className='divs'>
          
        <h5 className='div5'>Deferred</h5>
        {user.filter((i) => i.status === "Deffered").length > 0 ?
        <div className='divtask'>
          <Task user={user.filter((i) => i.status === "Deffered")} />
        </div>: null}
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
