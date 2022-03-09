import { Footer, Header } from './components'
import { AddTodoForm, TodoList, TotalCompletedItems } from './features/todolist/components';

function App() {
  return (
    <>
      <Header />
      <div className="container bg-white p-4 mt-5">
        <h1 className="h1">Listes des tâches à effectuer</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompletedItems />
      <Footer />
      </div>
    </>
  )
}

export default App
