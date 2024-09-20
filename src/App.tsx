import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert("log in to add more todos");
    } else {
      if (todoText.trim() === "") {
        alert("Please Enter text");
        return;
      }

      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />
      <main
        className="relative w-[800px] h-[500px] bg-white rounded-[8px] 
      shadow-[0_4px_4px_rgba(0,0,0,0.08)] 
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
      >
        <Header todos={todos} />

        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />

        <Sidebar handleAddTodo={handleAddTodo} todos={todos} />
      </main>
    </div>
  );
}

export default App;
