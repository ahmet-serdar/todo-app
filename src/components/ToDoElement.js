import React from 'react'

const ToDoElement = (props) => {
    return (
      <div className='row'>
        <p className='row__text'>{props.toDoText}</p>
        <button className='button__delete'
          onClick={ (e) =>{
            props.handleDelete(props.toDoText)
          }}
        >
        Delete
        </button>
      </div>
    )
}

export default ToDoElement