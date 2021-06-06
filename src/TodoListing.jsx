import React, { useEffect, useState } from "react";
import { categories, categoryIcons } from "./categories";
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
      <div className="grid mt-4 grid-cols-3 gap-3">
        {todos.map((todo, todoId) => (
          <div key={todoId} className="bg-gray-500 p-2">
            <div className="text-xl flex flex-row">
              <span className="mx-2">
                {todo.categories.map((cat, catId) => categoryIcons[cat])}
              </span>
            </div>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoListing;
