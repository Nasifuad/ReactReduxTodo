import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducer/TodoSlice";
export default function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const handleAdd = (e) => {
    todo.trim() && dispatch(addTodo(todo));
    e.preventDefault();
    setTodo("");
  };
  return (
    <div className="w-1/2">
      <form
        action="#"
        className="flex justify-center w-full"
        onSubmit={(e) => handleAdd(e)}
      >
        <div className="flex justify-center bg-slate-400  w-full rounded-lg">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="add todo"
            className="text-black p-4 border-none bg-transparent outline-none placeholder:text-violet-900 uppercase font-semibold w-full"
          />
          <button
            type="submit"
            className="border-none p-4  bg-red-900 rounded-lg text-white font-light"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
