import React from "react"


export default function Guest(props) {
    return (
        <div>
            <h1>I am Guest</h1>
            <p>{props.age}</p>
            <p>{props.name}</p>
        </div>
    )
}


