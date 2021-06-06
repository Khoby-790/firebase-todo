import React from "react";
import { categoryIcons } from "./categories";

const CategoryItem = ({ text, onClick, active }) => {
  const handleClick = () => {
    onClick &&
      onClick((prevs) => {
        if (prevs.includes(text)) {
          //filter
          alert("In it");
        } else {
          //add
          alert("Not in it");
        }

        return [];
      });
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        active ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } flex text-2xl items-center p-3 hover:shadow-lg  ${
        active ? "hover:text-gray-900 " : "hover:text-white hover:bg-gray-900"
      } cursor-pointer hover:rounded-lg`}
    >
      {categoryIcons[text]}
      <span className="text-lg ml-3">{text}</span>
    </div>
  );
};

export default CategoryItem;
