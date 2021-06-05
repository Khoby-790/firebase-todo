import React from "react";
import { categoryIcons } from "./categories";

const CategoryItem = ({ text }) => {
  return (
    <div className="bg-white flex text-2xl items-center p-3 hover:shadow-lg hover:bg-gray-900 hover:text-white cursor-pointer hover:rounded-lg">
      {categoryIcons[text]}
      <span className="text-lg ml-3">{text}</span>
    </div>
  );
};

export default CategoryItem;
