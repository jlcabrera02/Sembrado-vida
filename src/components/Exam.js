import React from "react";
import useGetData from "../hooks/useGetData";

export default function Exam() {
  const { data, error, isPending } = useGetData("/Cac");
  console.log(data, error, isPending);
  return (
    <>
      <h2>Hola mundo</h2>
    </>
  );
}
