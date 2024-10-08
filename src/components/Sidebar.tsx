import AddTodoForm from "./AddTodoForm";

export default function Sidebar({ todos, handleAddTodo }) {
  return (
    <section
      className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] 
      pt-[18px] pb-[28px]"
    >
      <AddTodoForm todos={todos} handleAddTodo={handleAddTodo} />
    </section>
  );
}
