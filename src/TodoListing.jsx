import React, { useEffect, useState } from "react";
import { categoryIcons } from "./categories";
import fire from "./fire";
const TodoListing = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const auth = localStorage.getItem("fta-auth");
    let messageRef = fire
      .database()
      .ref(`fta-todos-${auth}`)
      .orderByKey()
      .limitToLast(100);

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
      <div className="grid mt-4 lg:grid-cols-3 grid-cols-1 sm:grid-cols-1 gap-3">
        {todos.map((todo, todoId) => (
          <div
            key={todoId}
            className="bg-gradient-to-b from-bg-2 via-gray-300 shadow-xl to-bg-fta-primary cursor-pointer p-2"
          >
            <div className="text-xl flex py-2 flex-row">
              {todo.categories.map((cat, catId) => (
                <span className="mx-2">{categoryIcons[cat]}</span>
              ))}
            </div>
            <span className="font-semibold text-2xl">{todo.title}</span>
            <p className="font-light truncate">{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListing;
