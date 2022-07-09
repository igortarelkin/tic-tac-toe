import React from "react";

export const Square = (props) => {
  return <button onClick={props.onClick}>{props.value}</button>;
};
