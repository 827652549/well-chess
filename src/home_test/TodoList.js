import React from "react";

/**
 * 可添加的列表
 */
class TodoAPP extends React.Component{
    constructor(props) {
        super(props);
        this.state={item:[],text:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    render() {
        return(<div>
            <h2>TODO</h2>
            <TodoList item={this.state.item}></TodoList>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={'new-todo'}>what need to be done?</label>
                <br/>
                <input
                    id={'new-todo'}
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <button>Add #{this.state.item.length+1}</button>
            </form>
        </div>);
    }

    handleChange(e){
        this.setState({text:e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        if (!this.state.text.length){
            return;
        }
        const newItem={
            text:this.state.text,
            id:Date.now()
        }
        this.setState(state=>({
            item:state.item.concat(newItem),
            text:''
        }))
    }
}

class TodoList extends React.Component{
    render() {
        return(
            <ul>
                {this.props.item.map(item=>(
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            )
    }

}
export default TodoAPP;
