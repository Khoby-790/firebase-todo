import React, { useEffect, useState } from "react";
import { AtomSpinner } from "react-epic-spinners";
import fire from "./fire";
import TodoItem from "./TodoItem";
const TodoListing = () => {
  const [todos, setTodos] = useState([]);

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

  return (
    <div className="w-auto flex-1 flex flex-col text-white px-5 py-3 bg-fta-primary">
      <div className="">
        <span className="text-3xl font-thin">Todos</span>
      </div>
      {todos.length < 1 && (
        <div className="text-white w-full h-full flex justify-center items-center">
          <AtomSpinner color="red" />
        </div>
      )}
      <div className="grid mt-4 lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 gap-3">
        {todos.map((todo, todoId) => (
          <TodoItem key={todoId} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoListing;
