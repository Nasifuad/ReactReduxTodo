import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../reducer/TodoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  const dispatch = useDispatch();
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(removeTodo(id));
  };
  return (
    <div className="bg-slate-700 flex flex-col gap-4 w-1/2 p-10">
      {todos.map((todo, index) => {
        return (
          <div key={todo.id} className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-white uppercase">
              {index + 1}.{" "}
              <span className="font-extralight font-montserrat text-wrap">
                {todo.name}
              </span>
            </h1>
            <p
              className="text-xl font-semibold text-red-700 cursor-pointer bg-slate-400 px-2 rounded-full"
              onClick={(e) => handleDelete(e, todo.id)}
            >
              X
            </p>
          </div>
        );
      })}
    </div>
  );
}
