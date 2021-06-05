import React from "react";
import { FaHome } from "react-icons/fa";

const CategoryItem = ({ icon, text }) => {
  return (
    <div className="bg-white flex items-center p-3 hover:shadow-lg hover:bg-gray-900 hover:text-white cursor-pointer hover:rounded-lg">
      <FaHome />
      <span className="text-lg ml-3">{text}</span>
    </div>
  );
};

export default CategoryItem;
