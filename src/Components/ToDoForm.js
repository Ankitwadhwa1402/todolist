import react from "react";
import shortid from "shortid";

export default class ToDoForm extends react.Component{
    
    state={
        text:''
    }
    
    handlChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value 
        })
        }
    handleSubmit=(event)=>{
        event.preventDefault();
        if(event.target.text.value== "")
        {
            alert("text can't be blank")
            return false
        }
        this.props.onSubmit({
            id:shortid.generate(),
            text:this.state.text,
            complete:false

        })
        this.setState({
            text:""
        })
    }
    render(){

        return(
            <form onSubmit={this.handleSubmit}>
               <div className="container"><input name="text" value={this.state.text} onChange={this.handlChange}  placeholder="todo......................................"/>
                <button className="submit" type="submit" onSubmit={this.handleSubmit}><span>Submit</span></button></div>
                
            </form>
        );
    }
}