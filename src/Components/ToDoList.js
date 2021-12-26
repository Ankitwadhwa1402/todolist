import react from "react";
import CrossToDo from "./cross_todo";
import ToDoForm from "./ToDoForm";

export default class ToDoList extends react.Component{
    
    state={
        todos:[],
        toDoToShow:"all",
        toggleAllComplete:true

    };
    

   addtodo=async(todo)=>{
      const newtodo= await [todo,...this.state.todos];
        // this.state.todos.push(todo)
      await  this.setState({
            todos:newtodo    
      })
    }
    handleComplete=(id)=>{
        this.setState({
            todos: this.state.todos.map((todo)=>{
                if(todo.id===id)
                {
                    return {
                        ...todo,
                        complete:!todo.complete

                    }
                }
                else{
                    return todo;
                }
            }

            )
        });
    }
    updateTodoShow=(event)=>{

        this.setState({
            toDoToShow:event.target.name
        })
    }
    handleDelete=(id)=>{
       
        this.setState({
            todos:this.state.todos.filter((todo)=>todo.id!==id )
        })
    }
    removeToDosThatAreComplete=()=>{
      
        this.setState({
            todos:this.state.todos.filter((todo)=>!todo.complete )
        })
    }
    render(){
        let todos=[];
        if(this.state.toDoToShow==="all")
        {
            todos=this.state.todos;
        }
        else if(this.state.toDoToShow==="active"){
                todos=this.state.todos.filter(todo=>!todo.complete);
        }
        else if(this.state.toDoToShow==="complete")
        {
            todos=this.state.todos.filter(todo=>todo.complete);
        }
        return(
            <div>
                <ToDoForm onSubmit={this.addtodo} />
            <div className="nav-bar">
                
                    <button name="all" onClick={this.updateTodoShow}>All</button>
                    <button name="active" onClick={this.updateTodoShow}>Active</button>
                    <button name="complete" onClick={this.updateTodoShow}>Complete</button>
               <div className="btns">
              {this.state.todos.filter((todo)=>todo.complete).length? <div>
                    <button onClick={this.removeToDosThatAreComplete}>Remove all Complete todos</button>
               </div>:null}
               <div>
                    <button onClick={()=>{
                                  this.setState({
                                    todos:this.state.todos.map(todo=>({
                                            ...todo,complete:this.state.toggleAllComplete
                                })),
                        toggleAllComplete:!this.state.toggleAllComplete
                                                 })
                            }} >toggle all {`${this.state.toggleAllComplete?"Complete":"Incomplete"}`}</button>
                </div>
               </div>
            </div>
               <div >
                <div className="todo">{(todos.map((todo)=>{
                return <CrossToDo key={todo.id} todo={todo} onDelete={()=>this.handleDelete(todo.id)}
                 toggleComplete={()=>this.handleComplete(todo.id)}/>
                }))}</div>
               </div>
                
               <div>Active Todos Left: {this.state.todos.filter(todo=>!todo.complete).length}</div>
               
            </div>
        );
    }
}