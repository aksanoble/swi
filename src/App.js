import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://data.covid19india.org/v4/min/data.min.json"
        );

        setData(result.data);
      } catch (error) {
        alert("Something went wrong!");
      }
    };
    fetchData();
  }, []);

  return <Home />;
}

export default App;
