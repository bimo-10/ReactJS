import React, { useState } from "react";
import Button from "../layouts/Button/Button";

function Main() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [op, setOp] = useState("+");
  const [value, setValue] = useState(0);

  const handleNumber1Change = (event) => {
    setNumber1(Number(event.target.value));
  };

  const handleNumber2Change = (event) => {
    setNumber2(Number(event.target.value));
  };

  const handlePlusClick = () => {
    setOp("+");
    setValue(number1 + number2);
  };

  const handleMinClick = () => {
    setOp("-");
    setValue(number1 - number2);
  };
  const handleKaliClick = () => {
    setOp("x");
    setValue(number1 * number2);
  };
  const handleBagiClick = () => {
    setOp("/");
    setValue(number1 / number2);
  };

  return (
    <div>
      <div className="flex justify-center gap-8">
        <div>
          <label htmlFor="" className="label">
            first number
          </label>
          <input
            type="text"
            placeholder="first number"
            onChange={handleNumber1Change}
            className="input"
          />
        </div>
        <div className="self-center">
          <h4 className="text-2xl">{op}</h4>
        </div>
        <div>
          <label htmlFor="" className="label">
            Second number
          </label>
          <input
            type="text"
            placeholder="second number"
            onChange={handleNumber2Change}
            className="input"
          />
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-2xl">{value}</h2>
      </div>
      <div className="flex justify-center btn-group gap-8">
        <Button btn={"+"} onClick={handlePlusClick} />
        <Button btn={"-"} onClick={handleMinClick} />
        <Button btn={"x"} onClick={handleKaliClick} />
        <Button btn={"/"} onClick={handleBagiClick} />
      </div>
    </div>
  );
}

export default Main;
