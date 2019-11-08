import React, { useState, useEffect } from "react";
import axios from "axios";
import PeopleCard from "./PeopleCard"

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
            <div className="people">
                {plist.map((data, index)=>(
                    <PeopleCard key={index} name={data.name} bd={data.birth_year} />
                ))}
            </div>
        </div>
    )
}

export default People