import React from "react";
import styled from "styled-components";

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 400px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    box-shadow: 2px 2px darkgray;
`

function PeopleCard(props){
    return (
        <Card>
            <h1>{props.name}</h1>
            <h2>{props.bd}</h2>
        </Card>
    )
}

export default PeopleCard