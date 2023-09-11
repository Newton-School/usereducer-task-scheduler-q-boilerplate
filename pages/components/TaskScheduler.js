import React from "react";

export default function TaskScheduler() {

  return (
    <>
      <h2 className="name">TaskScheduler</h2>
      <div className="container">
        <div className="new-task">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
          />
          <input
            type="date"
            name="dueDate"
          />
          <select
            name="priority"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <select
            name="status"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {/* <button className="update-btn">Update Task</button> */}
          <button className="add-btn">Add Task</button>
        </div>
        <div class="task-list-container">
            <ul className="all-tasks">
                <li className="task">
                  <span>Task Title</span>
                  <span>Due Date</span>
                  <span>Priority</span>
                  <span>Status</span>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </li>
            </ul>
        </div>
      </div>
    </>
  );
}
