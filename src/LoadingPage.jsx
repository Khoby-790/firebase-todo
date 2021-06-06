import React from "react";
import { MoonLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <MoonLoader size={60} />
      <span className="my-3">Setting up page</span>
    </div>
  );
};

export default LoadingPage;
