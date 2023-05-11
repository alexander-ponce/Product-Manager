import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate} from "react-router-dom";

const Detail = (props) => {
    const [item, setItem] = useState({})
    const {id} = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setItem(res.data);

            })
            .catch( err => console.log(err) );
    }, []);

    const deleteProduct = () => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                navigate("/home")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            
            <p>Title: {item.title}</p>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <button onClick={deleteProduct}>Delete</button>
            <Link to={"/home"}>Go Back</Link>
        </div>
    );
}
export default Detail;

