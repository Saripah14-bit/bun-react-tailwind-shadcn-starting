import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";
import { Counter } from "./components/shared";
import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const increment: () => void = () => setCount(prevCount => prevCount + 1);
  const decrement: () => void = () => setCount(prevCount => prevCount - 1);
  const reset: () => void = () => setCount(0);

  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
        />
      </div>

      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        reset={reset}
      />
    </div>
  );
}

export default App;
