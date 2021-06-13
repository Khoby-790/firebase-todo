import React from "react";
import { categoryIcons } from "./categories";

const TodoItem = ({ todo = {} }) => {
  return (
    <>
      <div className=" bg-gray-500 shadow-xl  cursor-pointer p-2">
        <div className="text-xl flex py-2 flex-row">
          {todo.categories.map((cat, catId) => (
            <span key={catId} className="mx-2">
              {categoryIcons[cat]}
            </span>
          ))}
        </div>
        <span className="font-semibold text-2xl">{todo.title}</span>
        <p className="font-light truncate">{todo.description}</p>
      </div>
    </>
  );
};

export default TodoItem;
