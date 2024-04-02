import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import AddTaskForm from './components/AddTaskForm';
import ToDo from './components/ToDo';
import UpdateForm from './components/UpdateForm';

function App() {

  //Task (To Do List) State
  const [toDo, setToDo] = useState([]);

  //Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add task
  const addTask = () => {
    let num = toDo.length + 1;
    let newEntry = { id: num, title: newTask, status: false }
    setToDo([...toDo, newEntry])
    setNewTask('');
  }

  //delete task
  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask)
  }

  //Mark Task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  //cancel update
  const cancelUpdate = (id) => {
    setUpdateData('');
  }

  //change Task for Update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id)
    let updatedObjects = [...filterRecords, updateData]
    setToDo(updatedObjects);
    setUpdateData('');
  }


  return (
    <div className="wrapper">
      <div className="App container">

        <br /> <br />
        <h2>To Do List</h2>
        <br /> <br />

        {/*Update Task*/}
        {updateData && updateData ? (
          <UpdateForm updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate} />
        ) : (
          <AddTaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        )}


        {/*Display ToDos */}
        {<h4>Your Tasks:</h4>}
        <ToDo toDo={toDo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />

      </div>
    </div>
  );
}

export default App;
