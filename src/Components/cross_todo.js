import React from "react";
export default (props)=> 
   <div style={{display:"flex",justifyContent:"center"}}>  	
    <div className="todoitem"><span style={{
         fontSize:props.todo.complete?20:"",
         textDecoration:props.todo.complete?"line-through":"",
         textDecorationColor:props.todo.complete?"red":"",
         textDecorationStyle:props.todo.complete?"double":"",
      }} >{props.todo.text}</span>
    </div>
    <div className="btn">
     <button style={{cursor:"pointer"}}
             onClick={props.toggleComplete} >&#10004;
     </button>
    
     <button onClick={props.onDelete}>&#x2717;</button>
      </div>
   </div>