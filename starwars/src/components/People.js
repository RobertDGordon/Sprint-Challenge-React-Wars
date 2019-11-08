import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PeopleCard from "./PeopleCard"

const CardContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    justify-content: space-between;
    align-items: center;

`

const People = () =>{

    const [plist, setPlist] = useState([])

    useEffect(() =>{
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log (response.data)
            setPlist(response.data.results)
        })
        .catch(error =>{
            console.log(error)
        })
    },[]);

    return (
        <div>
            <CardContainer>
                {plist.map((data, index)=>(
                    <PeopleCard key={index} name={data.name} bd={data.birth_year} />
                ))}
            </CardContainer>
        </div>
    )
}

export default People