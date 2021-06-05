import React from "react";
import { FaHome } from "react-icons/fa";

const TodoForm = () => {
  return (
    <div className="w-1/3 bg-gradient-to-b from-bg-2  to-bg-fta-primary rounded-xl py-5 px-3">
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
            <div className="bg-white flex items-center p-3 hover:shadow-lg hover:bg-gray-900 hover:text-white cursor-pointer hover:rounded-lg">
              <FaHome />
              <span className="text-lg ml-3">Home</span>
            </div>
            <div className="bg-white flex items-center p-3 hover:shadow-lg hover:bg-gray-900 hover:text-white cursor-pointer hover:rounded-lg">
              <FaHome />
              <span className="text-lg ml-3">Home</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
