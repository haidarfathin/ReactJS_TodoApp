export default function DeleteBtn({ id, handleDeleteTodo }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
