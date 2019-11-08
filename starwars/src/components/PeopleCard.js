import React from "react";

function PeopleCard(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.bd}</h2>
        </div>
    )
}

export default PeopleCard