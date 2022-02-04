import React, { useState, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import BmiForm from "./Bmiform";
import Data from "./data";
import { getData, storeData } from "./localStorage";

function App(props) {
  const initialState = () => getData("data") || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData("data", state);
    const date = state.map((obj) => obj.date);
    const bmi = state.map((obj) => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  const handleChange = (val) => {
    let heightInM = val.height / 100;
    val.bmi = (val.weight / (heightInM * heightInM)).toFixed(2);
    let newVal = [...state, val];
    setState(newVal);
  };

  const handleDelete = (id) => {
    storeData("lastState", state);
    let newState = state.filter((i) => {
      return i.id !== id;
    });
    setState(newState);
  };

  return (
    <div className="App">
      <div className="row center">
        <h1 className="white-text"> BMI Tracker </h1>
      </div>
      <div>
        <BmiForm change={handleChange} />
        <div>
          <div className="row center">
            <h4 className="white-text">Data</h4>
          </div>
          <div className="data-container row">
            {state.length > 0 ? (
              <>
                {state.map((data) => (
                  <Data
                    id={data.id}
                    weight={data.weight}
                    height={data.height}
                    date={data.date}
                    bmi={data.bmi}
                    disabled={state.weight === "" || state.height === ""}
                    deleteCard={handleDelete}
                  />
                ))}
              </>
            ) : (
              <div className="center white-text">No log found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
