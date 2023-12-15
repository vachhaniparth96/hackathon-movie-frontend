import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Show = (props) => {
    return (
        <div className="Show">
            <h1>Show</h1>
            <div>
                <p>Title: </p>
                <p>Genre: </p>
                <p>Director: </p>
            </div>
        </div>
    )
}

export default Show