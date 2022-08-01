import React from "react";
import { useParams } from "react-router-dom";
import '../App.css';

const Detail = () => {
    let params = useParams();
    console.log(params)
    return <div>{params}</div>
 }


export default Detail