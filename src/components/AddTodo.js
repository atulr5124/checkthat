import React from 'react'

const AddTodo = props => {
    return (
        <div>
            <h3 className="display-6 text-center">What do you want to add?</h3>
            <div className="form-group" style={{ marginTop: "1em" }}>
                <input type="text" className="form-control" id="taskName" required />
                <small id="taskNameHelp" className="form-text text-muted">
                    Enter task in the field above.
                </small>
            </div>
            <div className="text-center">
                <button
                    onClick={props.onAddTask}
                    className="btn btn-primary"
                    style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default AddTodo