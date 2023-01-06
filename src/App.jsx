import { useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full min-h-screen bg-white flex justify-center items-center flex-col dark:bg-gray-900">
        <h1 className="text-6xl font-bold dark:text-white">Dark Mode</h1>
        <button
          className="bg-black dark:bg-white text-white dark:text-black text-4xl px-5 py-2 font-bold rounded-md mt-4"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <BsFillBrightnessHighFill size={30} color="black" />
          ) : (
            <BsFillMoonStarsFill size={30} color="white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
