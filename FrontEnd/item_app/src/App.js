import Header from './components/Header'
import InformationTable from './components/InformationTable'
import React, { useEffect, useState } from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://localhost:44351/Item")
        .then(response => response.json())
        .then(
          (data) => {
          console.log(data);
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
        )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="listContainer">
        <Header />
        <InformationTable informationList={ items }/>
      </div>
    );
  }
  return (
    <div className="listContainer">
      <Header />
      <InformationTable informationList={ fetchData() } />
    </div>
  );
}

const fetchData = () => {
  return fetch("https://localhost:44351/Item")
        .then((response) => response.json())
        .then((data) => console.log(data));}

export default App;
