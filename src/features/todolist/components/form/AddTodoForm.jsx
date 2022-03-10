import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../../redux/TodoSlice";

export default function AddTodoForm() {
  const [value, setValue] = useState("");
  const titleRef = useRef();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: value,
      })
    );
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        ref={titleRef}
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Ajouter une tâche..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>

      <button disabled={!value} type="submit" className="btn bg-blue-500 text-white mb-2">
        Ajouter
      </button>
    </form>
  );
}
