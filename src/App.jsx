import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <>
      <center className="max-container flex flex-col justify-center items-center h-screen bg-slate-600">
        <h1 className="absolute top-10 text-4xl uppercase font-extralight">
          Todo List
        </h1>
        <AddTodo />
        <Todos />
      </center>
    </>
  );
}
