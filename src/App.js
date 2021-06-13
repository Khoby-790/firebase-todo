import { useEffect, useState } from "react";
import { v4 } from "uuid";
import LoadingPage from "./LoadingPage";
import TodoForm from "./TodoForm";
import TodoListing from "./TodoListing";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("fta-auth");
    console.log(auth)
    if (auth) {
      setLoading(false)
    } else {
      const uid = v4();
      localStorage.setItem("fta-auth", uid);
      setLoading(false)
    }
  }, [])


  if (loading) return <LoadingPage />

  return (
    <div className="bg-fta-primary lg:flex-row md:flex-col sm:flex-col flex-col h-screen w-screen flex-1 flex p-6">
      <TodoForm />
      <TodoListing />
    </div>
  );
}

export default App;
