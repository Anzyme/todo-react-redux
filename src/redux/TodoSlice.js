import { createSlice } from "@reduxjs/toolkit";
const LOCAL_STORAGE_KEY = "todoApp.todos";
const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  : [];

const TodoSlice = createSlice({
  name: "todos",
  initialState: storedTodos,
  reducers: {
    addTodo: (state, action) => {
      //Ajouter un todo
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
        let prevTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        let newTodos = [...prevTodos, newTodo];
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodos));
      } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newTodo]));
      }
    },
    toggleComplete: (state, action) => {
      //Modifier l'état de complétion du todo
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
      let prevTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      prevTodos[index].completed = action.payload.completed;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(prevTodos));
    },
    deleteTodo: (state, action) => {
      //Supprimer le todo
      let prevTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      prevTodos = prevTodos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(prevTodos));
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
