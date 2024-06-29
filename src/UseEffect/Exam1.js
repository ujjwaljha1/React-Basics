import React, { useEffect, useState } from "react";

function Exam1() {
  const [clicked, setClicked] = useState(); // Initialize clicked state with an empty string
  const [count, setCount] = useState(0); // Initialize count state with 0

  useEffect(() => {
    // This effect runs whenever `clicked` state changes
    alert("we are in useEffect");
  }, [clicked,count]); // Dependency array with `clicked`, so the effect runs on `clicked` state change

  const handleCount = () => {
    // Function to increment count
    setCount(count + 1);
  };

  return (
    <div>
      {/* Buttons to update `clicked` state */}
      <button onClick={() => setClicked("Hello")}>Hello</button>
      <br />
      <hr />
      <button onClick={() => setClicked("World")}>World</button>
      <br />
      <hr />
      {/* Button to increment `count` state */}
      <button onClick={handleCount}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default Exam1;
