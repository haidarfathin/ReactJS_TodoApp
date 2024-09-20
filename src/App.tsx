import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import Swal from "sweetalert2";


interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    if (todoText.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please enter some text!",
      });
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
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        Swal.fire("Deleted!", "Your todo has been deleted.", "success");
      }
    });
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
