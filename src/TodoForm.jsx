import React, { useState } from "react";
import { categories } from "./categories";
import CategoryItem from "./CategoryItem";

const TodoForm = () => {
  const [_categories, setCategories] = useState([]);
  return (
    <div className="w-1/3 bg-gradient-to-b from-bg-2 shadow-lg  to-bg-fta-primary rounded-xl py-5 px-3">
      <form className="flex flex-col justify-center mx-4 flex-1 h-full">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex-col flex">
            <label className="font-bold text-white text-lg font-mono mb-2">
              Title
            </label>
            <input className="font-sans text-gray-700 text-xl  font-bold p-4 outline-none" />
          </div>

          <div className="flex-col flex">
            <label className="font-bold text-white text-lg font-mono mb-2">
              Description
            </label>
            <textarea className="font-sans text-gray-700 text-xl  font-bold p-4 outline-none" />
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
            <button className="bg-btn text-white rounded-3xl p-3 w-full hover:scale-50">
              Add todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
