import React, { useState } from "react";
import { categories } from "./categories";
import CategoryItem from "./CategoryItem";

const TodoForm = () => {
  const [_categories, setCategories] = useState([]);
  const [todo, setTodo] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    const auth = localStorage.getItem("fta-auth");
  };

  return (
    <div className="lg:w-1/3 md:w-full sm:w-full bg-gradient-to-b from-bg-2 shadow-lg  to-bg-fta-primary rounded-xl py-5 px-3">
      <form
        onSubmit={(e) => {}}
        className="flex flex-col justify-center mx-4 flex-1 h-full"
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="flex-col flex">
            <label className="font-bold text-white text-lg font-mono mb-2">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-sans text-gray-700 text-xl  font-bold p-4 outline-none"
            />
          </div>

          <div className="flex-col flex">
            <label className="font-bold text-white text-lg font-mono mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="font-sans text-gray-700 text-xl  font-bold p-4 outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat, id) => (
              <CategoryItem
                key={id}
                text={cat.text}
                active={_categories.includes(cat.text)}
                onClick={setCategories}
              />
            ))}
          </div>
          <div className="w-full my-4">
            {title && description && _categories.length && (
              <button className="bg-btn text-white rounded-3xl p-3 w-full hover:scale-50">
                Add todo
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
