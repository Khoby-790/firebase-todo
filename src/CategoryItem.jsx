import React from "react";
import { categoryIcons } from "./categories";

const CategoryItem = ({ text, onClick, active }) => {
  const handleClick = () => {
    onClick &&
      onClick((prevs) => {
        if (prevs.includes(text)) {
          //filter
          return prevs.filter((e) => e !== text);
        } else {
          //add
          return [...prevs, text];
        }
      });
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        active ? "bg-dark text-white" : "bg-white text-dark"
      } flex text-2xl items-center p-3 hover:shadow-lg  ${
        active ? " hover:text-white " : "hover:text-white hover:bg-dark"
      } cursor-pointer hover:rounded-lg`}
    >
      {categoryIcons[text]}
      <span className="text-lg ml-3">{text}</span>
    </div>
  );
};

export default CategoryItem;
