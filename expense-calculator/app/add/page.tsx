'use client'

import { useRef} from "react"


export default function Add() {

    var taskname=useRef("")
    var expense=useRef("")
    var formData=useRef({
        task: taskname,
        expense: expense
    })

    

    function handleClick(){
  
        formData.current.task=taskname.current.value
        formData.current.expense=expense.current.value
        
        
        var a=JSON.stringify(formData.current)
        fetch("http://localhost:8000/add",{
            method: "POST",
            body: a
        })

        console.log(a)

        // taskname.current.value=""
        // expense.current.value=""
        // formData.current.task=taskname.current.value
        // formData.current.expense=expense.current.value
        // console.log(formData.current)

    }
        


    
    
    return (
        <form name="addtask" className="flex flex-col gap-2 items-center justify-center bg-slate-400 p-7">
            <p>Welcome to add page</p>

            <textarea name="task" ref={taskname} placeholder="Enter the task here:" rows={2} cols={30} className="resize-none focus:outline-none border border-black rounded-md p-2" >
            </textarea>
            <input type="number" ref={expense} name="expense" placeholder="Expense" className="focus:outline-none border border-black p-2 flex w-full rounded-sm"/>
            <input type="button" onClick={()=>{handleClick()}} value={"Add Task"} className="flex text-blue-950 bg-white border border-blue-950 transition-colors ease-in duration-200 hover:bg-blue-950 hover:text-white items-center justify-center p-1 w-full text-lg rounded-sm" />


        </form>

    )
}