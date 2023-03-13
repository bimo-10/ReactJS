import React, { useState } from "react";
import Button from "../layouts/Button";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleMinClick = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  const handleResetClick = () => {
    setCounter(0);
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-bold text-6xl my-12">Counter</h1>
          <h1 className="font-bold text-5xl my-12">{counter}</h1>
          <div className="btn-group gap-8">
            <Button btn={"Decrease"} onClick={handleMinClick} />
            <Button btn={"Reset"} onClick={handleResetClick} />
            <Button btn={"Increase"} onClick={handlePlusClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
