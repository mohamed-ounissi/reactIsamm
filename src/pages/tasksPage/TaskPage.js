import React, { useEffect, useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import TasksList from "./../../components/tasksList/TasksList";
import * as api from "../../services/tasks.service";

function TaskPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [tasks, setTasks] = useState([]);

  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


 
  // const fetchData = async () => {
  //   const res = await api.fetchTasks();
  //   setTasks(res);
  //   console.log(res)
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);


  // 3ème forme de useEffect

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if (searchValue.length === 0) {
  //       console.log("tasks empty")
  //       setTasks([])
  //       setLoading(false)
  //     } else {
  //       const result = await api.fetchTasksByFilter(searchValue)
  //       console.log("tasks form api : " + searchValue)
  //       setTasks(result)
  //       setLoading(false)
  //     }
  //   }
  //   console.log("searchValue", searchValue)
  //   fetchData()
  // }, [searchValue])

    // 4ème forme de useEffect
  useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      setLoading(true)
      if (!searchValue) {
        setTasks([])
        setLoading(false)
      } else {
        const result = await api.fetchTasksByFilter(searchValue)
        if (!didCancel) {
          console.log("result: ", searchValue)

          setTasks(result)
          setLoading(false)
        }
      }
    }
    console.log("useEffect:", searchValue)
    fetchData()

    return () => {
      console.log("cleanup: ", searchValue)
      didCancel = true
    }
  }, [searchValue])


  const addTask = (title) => {
    setTasks([...tasks, { _id: Math.random() + "", title }]);
  };
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
  };

  const updateTask = (id, title) => {
    const newTasks = tasks.map((task) =>
      task._id === id ? { _id: id, title } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="tasks-list">
      <button onClick={() => toggleVisibility()}>Toggle visibility</button>
      <TaskForm addTask={addTask} />
      <input
        type="text"
        name="title"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
        }}
      /> 
      {loading ? (
        <div>loading...</div>
      ) : (
        isVisible && (
          <>
            <TasksList
              tasks={tasks}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          </>
        )
      )}
    </div>
  );
}

export default TaskPage;
