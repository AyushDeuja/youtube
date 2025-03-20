import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  // not like => ref=0
  // but like ref = {current: 0}
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namaste react", Math.random());
    }, 1000);
    return () => clearInterval(i.current);
  }, []);

  return (
    <div className="bg-slate-50 border border-black h-96 m-4 p-2 w-96">
      <div>
        <button
          className="bg-green-100 m-4 p-2"
          onClick={() => {
            x = x + 1;
            console.log("x=", x);
          }}
        >
          Increase x
        </button>
        <span className="text-xl font-bold">Let = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-100 m-4 p-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className="text-xl font-bold">State = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-100 m-4 p-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = ", ref.current);
          }}
        >
          Increase ref
        </button>
        <span className="text-xl font-bold">Ref = {ref.current}</span>
      </div>
      <button
        className="bg-red-900 p-4 m-4 text-white font-bold rounded-sm
        "
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
