import Link from "next/link";
import Todo from "@/components/Todo";

async function TodosPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await response.json();

  return (
    <>
      <h1 className="centerElement">Todos Page</h1>
      <h3>- Todo Title: {todo.title}</h3>

      <Todo />
    </>
  );
}

export default TodosPage;

//* By Default: React Server Component.
