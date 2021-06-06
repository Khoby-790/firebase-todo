import { useState } from "react";
import LoadingPage from "./LoadingPage";
import TodoForm from "./TodoForm";


function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <LoadingPage />

  return (
    <div className="bg-fta-primary lg:flex-row md:flex-col h-screen w-screen flex-1 flex p-6">
      <TodoForm />
      <div className="w-auto bg-gray-800"></div>
    </div>
  );
}

export default App;
