import React from 'react'

const TasksList = props => {
    return (
        <li className="list-group-item">
            <input type="checkbox" className="form-check-input" checked={props.todo.checked} onChange={props.onToggle} />
            <span id='taskText' style={{ textDecoration: "none" }}>{props.todo.text}</span>
            <button className="btn btn-danger btn-sm float-right" onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export default TasksList