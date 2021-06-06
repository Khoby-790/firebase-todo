import React, { useEffect, useState } from "react";
import fire from "./fire";

const TodoListing = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    let messageRef = fire
      .database()
      .ref("fta-todos")
      .orderByKey()
      .limitToLast(100);

    messageRef.on("child_added", (snapshot) => {
      let todo = { ...snapshot.val(), id: snapshot.key };
      setTodos((prev) => [...prev, todo]);
    });
  }, []);

  return (
    <div className="w-auto flex-1 bg-fta-primary">{JSON.stringify(todos)}</div>
  );
};

export default TodoListing;
