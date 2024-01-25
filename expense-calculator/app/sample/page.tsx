"use client"
import { useEffect, useState } from "react"

export default ()=>{

    const [name,setName]=useState({
        task:"",
        expense:""
    })
    

    useEffect(()=>{
        console.log(name)
    },[name])
    
    const handleClick = () => {
        
        
        setName({
            task:"",
            expense:""
        })
        
        
        
    }
    const handleClick2 = () => {
        
        
        console.log(name)
        
    }



    return(
        <form name="addtask" className="flex flex-col gap-2 items-center justify-center bg-slate-400 p-7">
            <p>Welcome to add page</p>

            <textarea name="task" placeholder="Enter the task here:" rows={2} cols={30} className="resize-none focus:outline-none border border-black rounded-md p-2" >
            </textarea>
            <input type="text" name="expense" placeholder="Expense" className="focus:outline-none border border-black p-2 flex w-full rounded-sm"/>
            <input type="button" onClick={handleClick} value={"Add Task"} className="flex text-blue-950 bg-white border border-blue-950 transition-colors ease-in duration-200 hover:bg-blue-950 hover:text-white items-center justify-center p-1 w-full text-lg rounded-sm" />
            <input type="button" onClick={handleClick2} value={"click"} className="flex text-blue-950 bg-white border border-blue-950 transition-colors ease-in duration-200 hover:bg-blue-950 hover:text-white items-center justify-center p-1 w-full text-lg rounded-sm" />


        </form>
    )
}