import React, { useState } from "react";
import MyContext from "./MyContext";
import sampledata from "../Components/AllData.json"
const MyContextProvider =({children})=>{
    const[user,setuser]=useState(sampledata);
    const[mydata,setmydata]=useState("")
    const[editfromdata,seteditformdata]=useState({
        title: '',
        description: '',
        team: '',
        assignee: '',
        priority: '', 
        status: 'pending'
      })
    return(
        <MyContext.Provider value={{user,setuser,mydata,setmydata,editfromdata,seteditformdata}}>
            {children}
        </MyContext.Provider>
    )

}
export default MyContextProvider;