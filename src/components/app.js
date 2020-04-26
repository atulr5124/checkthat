import React from 'react'
import HeaderNav from './HeaderNav'
import TasksList from './TasksList'
import AddTodo from './AddTodo'

let id = 0

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: [],
        }
    }

    addTodo() {
        const taskName = document.getElementById('taskName').value
        if (!taskName) {
            return
        }
        this.setState({
            todos: [
                ...this.state.todos,
                { id: id++, text: taskName, checked: false },
            ],
        })
        document.getElementById('taskName').value = ''
    }

    toggelTodo(id) {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id !== id) return todo
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked
                }
            })
        })
    }

    removeTodo(id) {
        // this.setState({
        //     todos: this.state.todos.filter(todo => todo.id !== id)
        //   })
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render() {
        return (
            <div>
                <HeaderNav />
                <div className="jumbotron jumbotron-fluid" style={{ padding: "1em" }}>
                    <div className="container">
                        <AddTodo onAddTask={() => this.addTodo()} />
                    </div>
                    <p style={{ color: "grey" }}>
                        {this.state.todos.filter(todo => todo.checked).length} tasks completed out of {this.state.todos.length}
                    </p>
                </div>
                <div className="container">
                    <ul className="list-group list-group-flush" style={{ marginLeft: "4em", marginRight: "4em" }}>
                        {this.state.todos.map(todo => (
                            <TasksList
                                onToggle={() => this.toggelTodo(todo.id)}
                                onDelete={() => this.removeTodo(todo.id)}
                                todo={todo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App