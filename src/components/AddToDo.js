import React from 'react'

class AddToDo extends React.Component {
    state = {
        error:undefined
    }
    
    handleAddToDo = (e) => {
        e.preventDefault()

        const toDo = e.target.elements.toDo.value.trim()
        const error = this.props.handleAddToDo(toDo)

        this.setState(() => ({error}))

        if(!error){
            e.target.elements.toDo.value = ''
        }

    }

    render(){
        return (
            <div className='addToDo'>
                
                <form onSubmit={this.handleAddToDo} className='todo-form'>
                    <input type='text' placeholder='Add Your Todo Here' name="toDo" className='todo-input' />
                    <button className='big-button'>Create new todo</button>
                </form>   
                {this.state.error && <p className='widget__message'>{this.state.error}</p>}
            </div>
        )
    }
}

export default AddToDo