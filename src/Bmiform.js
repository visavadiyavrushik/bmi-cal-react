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
    let { value, name } = e.target;

    if (value > 500) {
      value = 500;
    }

    const date = new Date().toLocaleString().split(",")[0];

    setState({
      ...state,
      [name]: value,
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
        <div>
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

        <div>
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
