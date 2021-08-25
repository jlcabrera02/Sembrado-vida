import React from "react";

export default function Card({ children, borderColor }) {
  const style = {
    borderColor,
  };

  return (
    <figure className="card-home d-block m-1" style={style}>
      {children}
    </figure>
  );
}

Card.defaultProps = {
  borderColor: "000",
};
