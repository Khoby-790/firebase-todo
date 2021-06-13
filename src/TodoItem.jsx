import React, { useEffect } from "react";
import { categoryIcons } from "./categories";
import { useSpring, animated } from "react-spring";
import fire from "./fire";

const TodoItem = ({ todo = {} }) => {
  const [props] = useSpring(() => ({
    from: {
      opacity: 0,
      marginTop: -20,
    },
    to: { opacity: 1, marginTop: 0 },
  }));

  const remove = () => {
    const auth = localStorage.getItem("fta-auth");
    const db = fire.database().ref(`fta-todos-${auth}/${todo.id}`);
    db.remove();
  };

  return (
    <animated.div
      onDoubleClick={remove}
      style={props}
      className=" bg-gray-500 shadow-xl group flex flex-col hover:bg-gray-700 duration-300 transform transition-all rounded-none cursor-pointer p-2"
    >
      <div className="w-auto">
        <div className="text-xl flex  py-2 flex-row">
          {JSON.stringify(todo)}
          {todo.categories.map((cat, catId) => (
            <span key={catId} className="mx-2">
              {categoryIcons[cat]}
            </span>
          ))}
        </div>
        <span className="font-semibold text-2xl">{todo.title}</span>
        <p className="font-light truncate">{todo.description}</p>
      </div>
      <div className=" hidden group-hover:flex absolute top-0 bottom-0 left-0 right-0 group-hover:h-11 transition-all duration-100 bg-red-600"></div>
    </animated.div>
  );
};

export default TodoItem;
