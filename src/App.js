import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useState, useEffect } from "react";
const API_URL = "https://course-api.com/react-tabs-project";
const App = () => {
  const [apiData, setApiData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      // console.log(data);
      setApiData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }
  console.log(apiData);
  const { company, dates, duties, id, title } = apiData[value];
  // console.log(company);
  return <div>
  </div>;
};
export default App;









