import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const InputMeasurements = ({ onSubmit }) => {
  const [bust, setBust] = useState("");
  const [waist, setWaist] = useState("");
  const [hips, setHips] = useState("");

  const handleSubmit = () => {
    // Validate input and pass measurements to onSubmit callback
    if (bust && waist && hips) {
      onSubmit({ bust, waist, hips });
    } else {
      // Display error message or take appropriate action
    }
  };

  return (
    <div>
      <TextField
        label="Bust (inches)"
        value={bust}
        onChange={(e) => setBust(e.target.value)}
        fullWidth
      />
      <TextField
        label="Waist (inches)"
        value={waist}
        onChange={(e) => setWaist(e.target.value)}
        fullWidth
      />
      <TextField
        label="Hips (inches)"
        value={hips}
        onChange={(e) => setHips(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default InputMeasurements;
