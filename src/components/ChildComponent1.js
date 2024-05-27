import React from 'react'

const ChildComponent1 = (props) => {
  return (
    <div style={{margin:'5px',backgroundColorolor:"#ef574c",width:"100%",height:"20px"}}>Child Component 1
    <button style={{color:"white"}} onClick={()=>props.setSelectedOption("Option 1")} >Option 1 </button>
    
    </div>
  )
}

export default ChildComponent1