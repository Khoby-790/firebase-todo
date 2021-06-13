import React from "react";
import { categoryIcons } from "./categories";
import { Spring } from "react-spring";

const TodoItem = ({ todo = {} }) => {
  return (
    <Spring
      from={{
        opacity: 0,
        marginTop: -200,
      }}
      to={{ opacity: 1, marginBottom: 0 }}
    >
      {(props) => (
        <div
          style={props}
          className=" bg-gray-500 shadow-xl  cursor-pointer p-2"
        >
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
      )}
    </Spring>
  );
};

export default TodoItem;
