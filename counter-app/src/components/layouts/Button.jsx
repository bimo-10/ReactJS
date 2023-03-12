import React from "react";

function Button({ btn, onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {btn}
      </button>
    </div>
  );
}

export default Button;
