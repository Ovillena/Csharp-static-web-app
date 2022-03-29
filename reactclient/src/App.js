import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  //http://localhost:7071/api/toons

  useEffect(() => {
    (async () => {
      try {
        let data = await axios.get("http://localhost:7071/api/toons");
        setData(data.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Octavio Villena A01207939 </h1>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((toon, index) => (
                  <tr key={index}>
                    <td> {toon.id} </td>
                    <td>
                      {toon.firstName} {toon.lastName}
                    </td>
                    <td> {toon.occupation} </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
