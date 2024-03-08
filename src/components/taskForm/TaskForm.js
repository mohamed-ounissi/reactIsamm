import React, { useEffect, useState } from "react"
import "./TaskForm.css"
export default function TaskForm(props) {
  const [title, setTitle] = useState("")
  useEffect(()=>{
    document.title = title
  
  })
  const handleAddTask = () => {
    props.addTask(title)
    setTitle("")
  }

  const addTask = "Add a task"
  const steps = ["Enter the task title", "Click on add task"]

  return (
    <div className="task-form">
      <ul>
        {steps.map((step) => (
          <li>{step}</li>
        ))}
      </ul>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button" onClick={handleAddTask}>
        Add a task
      </button>
    </div>
  )
}
