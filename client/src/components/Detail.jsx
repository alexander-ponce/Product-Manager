import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link, useNavigate} from "react-router-dom";
import DeleteButton from './DeleteButton';

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

    //no longer using
    // const deleteProduct = () => {
    //     axios.delete("http://localhost:8000/api/products/" + id)
    //         .then(res => {
    //             console.log(res.data)
    //             navigate("/home")
    //         })
    //         .catch(err => console.log(err))
    // }

    return (
        <div className="mt-4 bg-dark text-white p-4">
            
            <h4>Title: {item.title}</h4>
            <p>Price: $ {item.price}</p>
            <p>Description: {item.description}</p>
            <div >
            <Link className="btn btn-warning" to={"/products/edit/" + item._id}> Edit </Link>
            <DeleteButton itemId={item._id} successCallback={()=> navigate('/home')}/>
                <Link className="btn btn-primary" to={"/"}>Go Back</Link>
            </div>
        </div>
    );
}
export default Detail;

