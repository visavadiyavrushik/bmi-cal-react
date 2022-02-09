import React, { useState } from "react"
import "./App.css";

const initialValues = {
  weight: "",
  height: "",
  date: "",
};

const BmiForm = (props) => {
  const [state, setState] = useState(initialValues);

  const handleChange = (e) => {
    
    if (e.target.value > 500) {
      e.target.value = 500;
    }

    const date = new Date().toLocaleString().split(",")[0];

    setState({
      ...state,
      [e.target.name]: e.target.value,
      date,
    });
  };

  const handleSubmit = () => {
    props.change(state);
    setState(initialValues);
  };

  return (
    <>
    
      <div className="row" >
        <div className="col m6 s12" >
          <label htmlFor="weight">Weight (in kg)</label>
          <input
            id="weight"
            name="weight"
            type="number"
            min="1"
            max="500"
            value={state.weight}
            onChange={handleChange}
          />
        </div>

        <div className="col m6 s12">
          <label htmlFor="  ">Height (in cm)</label>
          <input
            id="height"
            name="height"
            type="number"
            min="1"
            max="500"
            value={state.height}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="center">
        <button
          id="bmi-btn"
          className="calculate-btn"
          type="button"
          onClick={handleSubmit}
          disabled={state.weight === "" || state.height === ""}
        >
          {" "}
          Calculate BMI
        </button>
      </div>
    </>
  );
};


export default BmiForm;
