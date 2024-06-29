import React, { useEffect } from 'react';

function Basics() {
  useEffect(() => {
    // Code to run after render or update
    console.log('Component rendered or updated');
    // Cleanup function (optional)
    return () => {
      console.log('Component will unmount');
      // Cleanup code here if needed
    };
  }, []); // Empty dependency array means this effect runs once after initial render

  return (
    <div>
      {/* JSX content of your component */}
      <h1>Hello, useEffect!</h1>
    </div>
  );
}

export default Basics;
