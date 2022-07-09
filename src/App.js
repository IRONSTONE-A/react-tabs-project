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
  // console.log(apiData);
  const { company, dates, duties, title } = apiData[value];
  // console.log(company);
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
      </div>
      <div className="underline"></div>
      <div className="jobs-center"></div>
        <div className="btn-container">
          {apiData.map((item, index)=> {
            return(
              <button key={index}
              onClick={()=> setValue(index)} className={`job-btn ${index===value && "active-btn"}`}>{item.company}</button>
            )
          })}
        </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((item, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight />
              <p>{item}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};
export default App;
