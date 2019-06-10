import React from 'react'
import ToDoElement from './ToDoElement'

const ToDoList = (props) => {
    return (
        <div >
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Todo`s</h3>
            <button onClick={props.handleDeleteAll} className='button' >Delete All</button>
        </div>
        
            {props.toDoList.map(e => (
                <ToDoElement 
                    key={e} 
                    toDoText={e}
                    handleDelete={props.handleDelete} 
                />
            ))}
            
            
        </div>
    )
}

export default ToDoList