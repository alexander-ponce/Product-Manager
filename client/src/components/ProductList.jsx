import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    //replaced code below
    // const {removeFromDom, product, setProduct} = props;

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
        console.log(res.data);
            setProduct(res.data);
    }, [])
        .catch((err)=>{
            console.log(err);
        });
    }, []);

    const removeFromDom = itemId => {
        setProduct(product.filter(item => item._id !== itemId))
    }
    
    //commented out for refactoring
    // const deleteProduct = (itemId) => {
    // 	axios.delete("http://localhost:8000/api/products/" + itemId)
    // 	.then((res)=>{

    //         removeFromDom (itemId)
	//     // console.log(res.data);
    //     //     setProduct(res.data);
	// })

    // 	.catch((err)=>{
    //         console.log(err);
    // 	});
    // };

    
    return (
        <div className="row mx-3">
            <div className="col-md-12 mb-2 ">
                <h2>Product List</h2>
            </div>
            {
                product.map((item, index)=>{
                return (
                    
                    <div className="col-md-4 rounded" key={index}> 
                        <div className="card-mb-4 bg-dark text-white p-4 mt-3 rounded " key={index}> 
                            <div className="card-mb-4" key={index}>
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text"> Price: {item.price}</p>
                                {/* <p>{item.title}</p>
                                <p>{item.price}</p> */}
                                {/* <p>{item.description}</p> */}
                                <Link to={`/products/${item._id}`} className="m-2 btn btn-primary" > {item.title}'s Page! </Link>
                                <Link to={"/products/edit/" + item._id} className="m-2 btn btn-warning" > Edit </Link>
                                <DeleteButton itemId={item._id} successCallback={()=>removeFromDom(item._id)}/>

                                {/* //no longer using button below
                                <button onClick={(e)=>{deleteProduct(item._id)}} className="m-2 btn btn-danger">
                                    Delete
                                </button> */}
                            </div>
                        </div>
                    </div>
                    )})}
        </div>
    )
}
export default ProductList;
