import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Forms from '../components/Forms';

const Update = (props) => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

     //new added code for refactoring
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])


    const updateProduct = productParam => {
        axios.patch('http://localhost:8000/api/products/' + id, 
        productParam)
            .then(res => console.log(res));
            navigate("/home");

    }        

    // commented out for refactorting code 
    // const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    // const [title, setTitle] = useState();
    // const [price, setPrice] = useState();
    // const [description, setDescription] = useState();
    // const navigate = useNavigate();
    // // retrieve the current values for this person so we can fill
    // // in the form with what is in the db currently
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/products/' + id)
    //         .then(res => {
    //             setTitle(res.data.title);
    //             setPrice(res.data.price);
    //             setDescription(res.data.description);
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    // const updateProduct = (e) => {
    //     e.preventDefault();
    //     axios.patch('http://localhost:8000/api/products/' + id, {
    //         title,    // this is shortcut syntax for title: title,
    //         price,      // this is shortcut syntax for price: price
    //         description
    //     })
    //         .then(res => {
    //             console.log(res);
    //             navigate("/home"); // this will take us back to the Main.js
    //         })
    //         .catch(err => console.log(err))
    // }
    return (
        <div>
            <h1>Update a Product</h1>

            {
            loaded && <Forms onSubmitProp={updateProduct} 
            initialTitle={product.title}
            initialPrice={product.price} 
            initialDescription={product.description}
            />
            }




            </div>
            )
        }
export default Update;

//no longer needed
{/* <Forms onSubmitProp={updateProduct} initialTitle={product.title}
initialPrice={product.price} initialDescription={product.description}
/> */}


            {/* //no longer using code below after refactoring
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label><br />
                    <input type="text" 
            ß        name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price:</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input className="btn btn-success" type="submit" />
            </form> */}

