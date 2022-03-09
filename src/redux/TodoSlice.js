import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      //Ajouter un todo
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      }
      state.push(newTodo)
    },
    toggleComplete: (state, action) => {
      //Modifier l'état de complétion du todo
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
        //Supprimer le todo
        return state.filter((todo) => todo.id !== action.payload.id);
    }
  },
})

export const { addTodo, toggleComplete, deleteTodo } = TodoSlice.actions

export default TodoSlice.reducer
