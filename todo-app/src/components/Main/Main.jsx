import React, { useState } from "react";

function Main() {
  const [addTodo, setAddTodo] = useState(false);
  const [addData, setAddData] = useState([]);
  const [userInput, setUserInput] = useState([]);

  const handleInput = () => {
    setAddTodo(true);
  };
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const handleAddInput = () => {
    setAddData(userInput);
    console.log(addData);
    setUserInput("");
    setAddTodo(false);
  };
  return (
    <>
      <div>
        <button type="button" className="btn" onClick={handleInput}>
          New Todo
        </button>
        {addTodo && (
          <div>
            <input
              className="input"
              type="text"
              placeholder="todo"
              onChange={handleChange}
            />
            <button type="button" className="btn" onClick={handleAddInput}>
              Add Todo
            </button>
          </div>
        )}
        <ul>
          <li>{addData}</li>
        </ul>
      </div>
    </>
  );
}

export default Main;
