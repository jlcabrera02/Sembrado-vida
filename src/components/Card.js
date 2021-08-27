import React from "react";

export default function Card({ children, border }) {
  return (
    <figure className={`card-home d-block m-1 border border-${border}`}>
      {children}
    </figure>
  );
}

Card.defaultProps = {
  border: "dark",
};
