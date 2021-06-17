import Card from "react-bootstrap/Card"
import NavBar from "../NavBar"
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const ViewForm = () => {
    let { id } = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState();
    
    useEffect(() => {
        async function fetchData() {
          fetch("https://localhost:44351/Item/" + id)
          .then(response => response.json())
          .then(
            (data) => {
            //console.log(data.errors.id[0]);
            if (data.errors) {
                setIsLoaded(true);
                setError({"message": data.errors.id[0]});
                //console.log(error)
            }
            else {
                setIsLoaded(true);
                setItem(data);
            }
          },
          (error) => {
            //console.log(error)
            //console.log(error.response.data)
            setIsLoaded(true);
            setError(error);
          }
          )
        }
        fetchData()
      }, [])
    if (error) {
    return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
    return <div>Loading...</div>;
    } else {
        if (!item) {return <div></div>}
        return (
            <div>
                <NavBar />
                <div style={{ padding: "10%" }}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Items #{item.id}</Card.Title>
                            <Card.Title>Items Name:</Card.Title>
                            <Card.Text>{item.name}</Card.Text>
                            <Card.Title>Items Description:</Card.Title>
                            <Card.Text>{item.description}</Card.Text>
                            <Card.Title>Item was added on:</Card.Title>
                            <Card.Text>{item.timeOfAddition}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ViewForm
