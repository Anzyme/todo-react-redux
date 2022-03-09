import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../../../../redux/TodoSlice";

export default function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({id: id, completed: !completed })
      );
  }

  const handleDeleteClick = () => {
    dispatch(
      deleteTodo({id: id})
    );
  }

  return (
    <li className='list-group-item'>
      <div className="d-flex justify-content-between">
        <span className='d-flex align-items-center'>
          <input type='checkbox' className="mr-3 form-check-input" checked={completed} onChange={handleCompleteClick}/>
          {title}
          </span>
          <button className='btn btn-danger' onClick={handleDeleteClick}>Supprimer</button>
        </div>
      </li>
  )
}
