import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/products")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	});
    }, []);
    
    return (
        <div>
            <h1>Product List</h1>
            {
                product.map((item, index)=>{
                return (
                    <div key={index}> 
                        {/* <p>{item.title}</p>
                        <p>{item.price}</p> */}
                        {/* <p>{item.description}</p> */}
                        <Link to={`/products/${item._id}`}> {item.title}'s Page! </Link>
                    </div>
            )})}
        </div>
    )
}
export default ProductList;
