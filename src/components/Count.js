import React from "react";

function Count({ number }) {
  const style = {
    fontFamily: "Chango",
    fontSize: "3rem",
    color: "var(--sv-purple)",
  };

  return (
    <div className="border border-tm-purple rounded-circle d-flex wth-300px hgt-300px my-3">
      <p className="m-auto">
        <span style={style}> {number}</span>
      </p>
    </div>
  );
}

export default Count;
