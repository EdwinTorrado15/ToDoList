import React, { Fragment } from "react";
import "../CSS/TodoSearch.css";

export const TodoSearch = ({searchValue, setSearchValue}) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <Fragment>
        <input
        className="TodoSearch"
        placeholder="Buscador"
        value={searchValue}
        onChange={onSearchValueChange}
        />
    </Fragment>
  );
};
