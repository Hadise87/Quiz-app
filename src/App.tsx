/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Quiz } from "./Components/Quiz/Quiz";

const App: React.FC = () => {
  return (
    <div>
      <Quiz />
    </div>
  );
};

export default App;
