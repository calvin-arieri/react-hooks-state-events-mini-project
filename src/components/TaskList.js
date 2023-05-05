import React from "react";

function TaskList({passing_task}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
        {passing_task.map((task) =>{
          return(
            <li key={task.text}>{task.text} {task.category}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default TaskList;
