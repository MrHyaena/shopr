import { useState } from "react";
import { Sidebar } from "./sidebar";
import { Board } from "./board";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-[200px_1fr] min-h-screen">
        <Sidebar />
        <Board />
      </div>
    </>
  );
}

export default App;
