import React from "react";
import { CircleFill } from "./Icons";

function Circle({ fill, msg }) {
  return (
    <>
      <p className="m-0 p-0">
        <CircleFill fill={fill} size="20" />
        {msg}
      </p>
    </>
  );
}

export default function Pointing({ icon }) {
  return (
    <div className="pointing">
      <Circle fill="var(--sv-purple)" msg="En vivero" />
      <Circle fill="var(--sv-orange)" msg="Repartido" />
    </div>
  );
}
