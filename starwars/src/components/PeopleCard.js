import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from "styled-components";
// import Starships from "./Starships"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 270px;
    height: 420px;
    border: 1px solid black;
    background-color: white;
    border-radius: 10px;
    margin: 30px;
    margin-bottom: 130px;
    padding: 10px;
    box-shadow: 2px 2px darkgray;
    transition: transform 0.3 ease;
    p {
        text-transform: capitalize;
    }
    span{
        font-weight: bold;
    }
    img{
        width: 225px;
        box-shadow: 2px 2px black;
        margin-top: -120px;
        border-radius: 5px;
    }
    &:hover {
        transform: scale(1.2);
    }
`

const Scroll = styled.div`
    overflow: auto;
`

function PeopleCard(props){
    let imgnum = 10
    if (props.name.startsWith("Luke")){
        imgnum = 0
    }else if (props.name.startsWith("C-3PO")){
        imgnum = 1
    }else if (props.name.startsWith("R2-D2")){
        imgnum = 2
    }else if (props.name.startsWith("Darth")){
        imgnum = 3
    }else if (props.name.startsWith("Leia")){
        imgnum = 4
    }else if (props.name.startsWith("Owen")){
        imgnum = 5
    }else if (props.name.startsWith("Beru")){
        imgnum = 6
    }else if (props.name.startsWith("R5-D4")){
        imgnum = 7
    }else if (props.name.startsWith("Biggs")){
        imgnum = 8
    }else if (props.name.startsWith("Obi")){
        imgnum = 9
    }

    const [hlist, setHlist] = useState([])

    useEffect(() =>{
        axios.get(`${props.home}`)
        .then(response => {
            // console.log ("homeworld here", response.data.name)
            setHlist(response.data.name)
        })
        .catch(error =>{
            console.log(error)
        })
    },[props.home]);

    // const [shiplist, setShiplist] = useState([])
    // const [listships, setListships] = useState(false)

    // useEffect(() =>{
    //     if (props.starships.length > 0){
    //         axios.get(`${props.starships}`)
    //         .then(response => {
    //             console.log ("starships here", props.starships)
    //             setShiplist(response.data)
    //             setListships(true)
    //         })
    //         .catch(error =>{
    //             console.log(error)
    //         })
    //     }else {
    //         setShiplist ({"name":["none"]})
    //     }
    // },[props.starships]);
    

    return (
        <Card>
            <img src={ require(`../img/${imgnum}.jpg`)} alt='Profile'></img>
            <h1>{props.name}</h1>
            <Scroll>
            <p><span>Birth year: </span> {props.bd}</p>
            <p><span>Homeworld: </span> {hlist} </p>
            <p><span>Gender:</span> {props.gender}</p>
            <p><span>Height:</span> {props.height}</p>
            <p><span>Weight:</span> {props.mass}</p>
            {/* <p><span>Starships:</span> {shiplist}</p>
             {/* {shiplist.map((data, index)=>(
                    <Starships key={index} name={data.name}/>
                ))}</p> */}
            
            </Scroll>
        </Card>
    )
}

export default PeopleCard