import React from "react";
import "../CSS/CreateTodoButton.css";

export const CreateTodoButton = () => {

  const onClickButton = (msg) =>{
    alert(msg);
  }

  return <button
  className="CreateTodoButton"
  onClick={() => onClickButton('Aqui deberia de ir un modal')}
  >
    +
  </button>;
};
