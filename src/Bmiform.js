import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./App.css";

const initialValues = {
  weight: "",
  height: "",
  date: "",
};

const BmiForm = ({ change }) => {
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
    change(state);
    setState(initialValues);
  };

  return (
    <>
      <div className="row">
      {/* className="col m6 s12"git  */}
        <div >
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
        {/* className="col m6 s12" */}
        <div>
          <label htmlFor="height">Height (in cm)</label>
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
          disabled={state.weight === '' || state.height === ''}
        > Calculate BMI
        </button>
      </div>
    </>
  );
};

BmiForm.propTypes = {
	change: PropTypes.func.isRequired
};

export default BmiForm;
