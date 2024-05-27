import React from 'react'

const ChildComponent2 = (props) => {
  return (
    
    <div style={{margin:'5px',color:"#ef574c",width:"100%",height:"20px"}}>Child Component 2
    <button style={{color:"white"}} onClick={()=>props.setSelectedOption("Option 2")} >Option 2 </button>
    
    </div>
  )
}

export default ChildComponent2