import React, { useState } from "react";

function Main() {
  const [r, setR] = useState(255);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);

  const handleBtnClick = () => {
    // setColor();
    setR(Math.floor(Math.random() * 256) - 1);
    setG(Math.floor(Math.random() * 256) - 1);
    setB(Math.floor(Math.random() * 256) - 1);
  };
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
      >
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="my-8 bg-black py-4 px-8 rounded-lg">
              <h1 className="text-3xl font-bold text-white">
                Background Color :{" "}
                <span className="text-primary">{`rgb(${r}, ${g}, ${b})`}</span>
              </h1>
            </div>
            <div>
              <button className="btn btn-outline" onClick={handleBtnClick}>
                Click Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
