'use client'

import { log } from "console"
import { useEffect, useRef, useState } from "react"
import ReactDOM from "react-dom/client"


export default function Clock() {
    // const st={
    //     background-color:"black"
    // }
    // var [style,setStyle]=useState(st)
    var rot=useRef(0)
    
    
        // setInterval(()=>{
        //     setRot(rot+45)
        // },1000)
        

    
    



    return (
        <div className="flex  border-2 w-96 h-96 relative">
            <div className=" absolute flex flex-col w-2 bg-black h-20" id="hand" style={{rotate:rot+'deg'}}>
                {/* <div id="shand" className="flex w-1 h-20 bg-black border-b-4 border-b-orange-600">

                </div>
                <div className="flex w-1 h-20 bg-black opacity-0">

                </div> */}
                

            </div>
            <input type="button" value="click" onClick={()=>{
                    console.log(rot.current+45)
                }} />
        </div>

        
    

    )
    
}