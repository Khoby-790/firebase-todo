import React, { useEffect, useState } from "react";
import { AtomSpinner } from "react-epic-spinners";
import fire from "./fire";
import TodoItem from "./TodoItem";
import { useSprings, animated, interpolate } from "react-spring";

const to = (i) => ({
  x: 0,
  y: 0,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 200,
});
const from = (i) => ({ x: 1000, rot: 0, scale: 1.5, y: -1000 });

const TodoListing = () => {
  const [todos, setTodos] = useState([]);
  const [props] = useSprings(todos.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above

  useEffect(() => {
    const auth = localStorage.getItem("fta-auth");
    let messageRef = fire
      .database()
      .ref(`fta-todos-${auth}`)
      .orderByKey()
      .limitToLast(12);

    messageRef.on("child_added", (snapshot) => {
      let todo = { ...snapshot.val(), id: snapshot.key };
      setTodos((prev) => [...prev, todo]);
    });
  }, []);

  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;

  return (
    <div className="w-auto flex-1 flex flex-col overflow-y-scroll text-white px-5 py-3 bg-fta-primary">
      <div className="">
        <span className="text-3xl font-thin">Todos</span>
      </div>

      {todos.length < 1 && (
        <div className="text-white w-full h-full flex justify-center items-center">
          <AtomSpinner color="red" />
        </div>
      )}
      <div className="grid mt-4 lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 gap-3">
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div
            key={i}
            style={{
              transform: interpolate(
                [x, y],
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <TodoItem todo={todos[i]} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default TodoListing;
