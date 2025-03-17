import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering....");

  //   const prime = findPrime(text);
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <button
        className="bg-green-200 m-10 p-2"
        onClick={() => {
          setIsDarkTheme(!isDarkTheme);
        }}
      >
        Toggle
      </button>
      <div>
        <input
          className="border border-black w-72 px-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
