import React from "react";
import { categoryIcons } from "./categories";
import { useSpring, animated } from "react-spring";

const TodoItem = ({ todo = {} }) => {
  const [props] = useSpring(() => ({
    from: {
      opacity: 0,
      marginBottom: 1000,
    },
    to: { opacity: 1, marginBottom: 0 },
  }));

  return (
    <>
      <animated.div
        style={props}
        className=" bg-gray-500 shadow-xl hover:rounded-md cursor-pointer p-2"
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
      </animated.div>
    </>
  );
};

export default TodoItem;
