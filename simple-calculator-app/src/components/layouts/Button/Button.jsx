import React from "react";

function Button({ btn, onClick }) {
  return (
    <div>
      <button type="button" onClick={onClick} className="btn w-16 h-16">
        {btn}
      </button>
    </div>
  );
}

export default Button;
