// Import necessary dependencies
import React, { useState } from "react";
import ReactDOM from "react-dom";
import InputMeasurements from "./InputMeasurements"; // Import your InputMeasurements component

// Create a parent component to render the InputMeasurements component
const App = () => {
  const handleSubmit = (measurements) => {
    // Handle submitted measurements data, e.g. display size chart or provide size recommendations
    console.log("Submitted measurements:", measurements);
  };

  return (
    <div>
      <h1>XXS-XXL Size Guide</h1>
      <InputMeasurements onSubmit={handleSubmit} />
    </div>
  );
};

// Render the parent component to the root element of your webpage
ReactDOM.render(<App />, document.getElementById("root"));
