import React from 'react';
import Header from './Header'
import AddToDo from './AddToDo'
import ToDoList from './ToDoList'

export default class App extends React.Component {
    state = {
        toDoList : []
    }
    componentDidMount(){
        console.log('todo app started!!!')
        try{
            const json = localStorage.getItem('toDoList')
            const toDoList = JSON.parse(json)

            if(toDoList) {
                this.setState(() => ({toDoList}))
            }
        }
        catch(e) {
            console.log('error')
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.toDoList.length !== this.state.toDoList.length) {
            const json =JSON.stringify(this.state.toDoList)
            localStorage.setItem('toDoList',json)
        }
    }

    handleAddToDo = (toDo) => {
        if(!toDo){
            return 'Enter valid todo'
          }else if(this.state.toDoList.indexOf(toDo) > -1){
            return 'Already wrote this todo'
          }
      
          this.setState((prevState) => ({toDoList: prevState.toDoList.concat(toDo) }))
    }

    handleDeleteAll = () => {
        this.setState(() => ({toDoList:[]}))
    }

    handleDelete = (e) => {
        this.setState((prevState) => ({
            toDoList: prevState.toDoList.filter(event => event !== e)
        }))
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container'> 
                    <div className='widget'>
                        <ToDoList 
                        toDoList={this.state.toDoList} 
                        handleDeleteAll={this.handleDeleteAll}
                        handleDelete={this.handleDelete}
                        />

                        <AddToDo
                        handleAddToDo = {this.handleAddToDo}
                        />
                    </div>
                    
                </div>
            </div>
        )
    }
}

