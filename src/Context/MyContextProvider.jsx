import React, { useState } from "react";
import MyContext from "./MyContext";
import sampledata from "../Components/AllData.json"
const MyContextProvider =({children})=>{
    const[user,setuser]=useState(sampledata);
    const[mydata,setmydata]=useState({})
    return(
        <MyContext.Provider value={{user,setuser,mydata,setmydata}}>
            {children}
        </MyContext.Provider>
    )

}
export default MyContextProvider;