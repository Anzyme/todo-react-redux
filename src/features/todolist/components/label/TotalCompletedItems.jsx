import { useSelector } from "react-redux";

export default function TotalCompletedItems() {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const todos = useSelector((state) => state.todos);
  // return <h4 className="h4 mt-3">Nombre de tâches complétées : {completedTodos.length} / {todos.length}</h4>;
  if (todos.length > 0) {
    return <h4 className="h4 mt-3">Nombre de tâches complétées : {completedTodos.length} / {todos.length}</h4>;
  } else {
    return <h4 className="h4 mt-3">Aucune tâche pour le moment</h4>;
  }
}
