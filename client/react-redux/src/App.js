import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const datasetLabels = {
    name: "Name",
    allocation: "Allocation",
    allocationPercentage: "Allocation %"
  };

  const dataset = [
    {
      id: 1,
      name: "Product",
      allocation: 0.1,
      allocationPercentage: 10
    },
    {
      id: 2,
      name: "Infrastructure",
      allocation: 0.7,
      allocationPercentage: 70
    },
    {
      id: 3,
      name: "Reactive",
      allocation: 0.15,
      allocationPercentage: 15
    },
    {
      id: 4,
      name: "Grooming",
      allocation: 0.05,
      allocationPercentage: 5
    }
  ];

  //
  // // IGNORE, used to render as an example
  // document.getElementById("datasetLabels").innerText = `const datasetLabels = ${JSON.stringify(datasetLabels)}`;
  // document.getElementById("dataset").innerText = `const dataset = ${JSON.stringify(dataset)}`;

  const [count, setCount] = useState(0);

  const mapTitles = Object.values(datasetLabels).map(item => <th>{item}</th>);
  const titlesKeys = Object.keys(datasetLabels);

  const map = dataset.map(item => {
    return (
      <tr key={item.id}>
        {titlesKeys.map((key, i) => {
          return <td>{item[key]}</td>;
        })}
      </tr>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <table>
          <tr>{mapTitles}</tr>
          {map}
        </table>
      </header>
    </div>
  );
}

export default App;
