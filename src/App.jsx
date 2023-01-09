import { useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <nav className="w-full flex justify-end bg-transparent p-2 fixed">
        <button
          className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 font-bold rounded-md"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <BsFillBrightnessHighFill size={30} color="black" />
          ) : (
            <BsFillMoonStarsFill size={30} color="white" />
          )}
        </button>
      </nav>
      <div className="w-full min-h-screen bg-white flex justify-center items-center flex-col dark:bg-gray-900">
        <h1 className="text-6xl font-bold dark:text-white">Dark Mode</h1>
      </div>
    </div>
  );
}

export default App;
