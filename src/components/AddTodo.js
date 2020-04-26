import React from 'react'

class AddTodo extends React.Component {

    onClickAdd = () => {
        const taskName = document.getElementById('taskName').value
        if(!taskName) {
            return
        }
        this.props.getTaskName(taskName)
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{ padding: "1em" }}>
                <div className="container">
                    <h3 className="display-6 text-center">What do you want to add?</h3>
                    <div className="form-group" style={{ marginTop: "1em" }}>
                        <input type="text" className="form-control" id="taskName" />
                        <small id="taskNameHelp" className="form-text text-muted">
                            Enter task in the field above.
                           </small>
                    </div>
                    <div className="text-center">
                             <button
                                 onClick={this.onClickAdd}
                                 className="btn btn-primary"
                                 style={{ paddingLeft: "100px", paddingRight: "100px" }}>
                                 Add
                             </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo