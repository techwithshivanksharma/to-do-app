import React from 'react'

const AddTaskForm = ({ newTask, setNewTask, addTask}) => {
    return (
        <div>
            <>
                {/*Add Task */}

                <div className="row">
                    <div className="col">
                        <input
                            value={newTask}
                            onChange={(e) => { setNewTask(e.target.value) }}
                            className="form-control form-control-lg"
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            className="btn btn-lg btn-success"
                            onClick={addTask}
                        >
                            Add
                        </button>
                    </div>
                </div>

                <br />
            </>
        </div>
    )
}

export default AddTaskForm
