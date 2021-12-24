import React, { useState, useEffect } from "react";

import { useRouteMatch, useLocation } from "react-router-dom";

import axios from "axios";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          "https://data.covid19india.org/v4/min/data.min.json"
        );
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        alert("Something went wrong!");
      }
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <Home data={data} />;
}

export default App;
