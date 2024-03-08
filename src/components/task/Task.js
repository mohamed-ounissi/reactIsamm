import React, { useState } from "react";
import "./Task.css";
import { Link, useNavigate } from "react-router-dom";
export default function Task({ id, title, duration, deleteTask, updateTask }) {
  const [updateMode, setUpdateMode] = useState(false);
  const [titleToUpdate, setTitleToUpdate] = useState(title);
  const navigate = useNavigate();
  const handleUpdateTask = () => {
    updateTask(id, titleToUpdate);
    setUpdateMode(false);
  };
  function help() {
    return <div>click for help</div>;
  }
  const handleLink = () => {
    if (duration > 50) {
      navigate(`/tasks/${id}`);
    }
  };
  return (
    <div className="task" style={{ backgroundColor: "cyan" }}>
      {!updateMode ? (
        <>
          {/* <Link to={`/tasks/${id}`}> */}
          <div className="title" onClick={handleLink}>
            {title}
          </div>
          {/* </Link> */}
          <div className="title">{duration}</div>
          {/* <div className="title">{details.level}</div> */}

          <div className="actions">
            <button onClick={() => deleteTask(id)}>delete</button>

            <button onClick={() => setUpdateMode(true)}>update</button>
          </div>
          {help()}
        </>
      ) : (
        <div>
          <input
            type="text"
            name="title"
            value={titleToUpdate}
            onChange={(e) => setTitleToUpdate(e.target.value)}
          />

          <button className="button" onClick={handleUpdateTask}>
            Update a task
          </button>
        </div>
      )}
    </div>
  );
}

// export default function Task(props) {
//   function help() {
//     return <div>click for help</div>
//   }
//   return (
//     <div className="task" style={{ backgroundColor: "cyan" }}>
//       <div className="title">{props.title}</div>
//       <div className="title">{props.duration}</div>
//       {/* <div className="title">{props.details.level}</div> */}

//       <div className="actions">
//         <span>delete</span>
//         <span>update</span>
//       </div>
//       {help()}
//     </div>
//   )
// }
