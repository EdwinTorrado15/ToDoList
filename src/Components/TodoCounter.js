import React, { Fragment } from "react";
import "../CSS/TodoCounter.css";

export const TodoCounter = ({total,completed}) => {

  return (
    <Fragment>
      <h2 className="TodoCounter">
            Has complentado {completed} de {total} ToDos
      </h2>
    </Fragment>
  );
};
