import React, { useState } from "react";
import Button from "../layouts/Button";

function Counter() {
  const [counter, setCounter] = useState(0);
  const handleMinClick = () => {
    setCounter(counter - 1);
    if (counter <= 0) {
      setCounter(0);
    }
    console.log(counter);
  };
  const handlePlusClick = () => {
    setCounter(counter + 1);
    console.log(counter);
  };
  return (
    <div className="flex justify-center gap-4">
      <Button btn={"-"} onClick={handleMinClick} />
      <h1 className="self-center">{counter}</h1>
      <Button btn={"+"} onClick={handlePlusClick} />
    </div>
  );
}

export default Counter;
