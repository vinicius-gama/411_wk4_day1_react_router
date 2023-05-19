import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom" 

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const {id} = useParams()
    return (
        <h1>A specific car</h1>
    )
}

export default Car