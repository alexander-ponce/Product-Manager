import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Forms from '../components/Forms';
import ProductList from '../components/ProductList';

const Main = () => {
    
    // no longer using code below, putting everything in new const for List
    // const [product, setProduct] = useState([]);

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProductList(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])

    //updated code for refactoring 
    // const removeFromDom = itemId => {
    //     setProduct(product.filter(item => item._id != itemId)); } //We could also write this in our ProductList component 

    const createProduct = productParam => {
        console.log("before post in misin", productParam)
        axios.post('http://localhost:8000/api/products', {...productParam})
            .then(res => {
                console.log(res);
                console.log(res.data)
                setProductList([...productList, res.data])
            })
            .catch((err)=>console.log(err))
            // const errors = err.response.data.errors.errors
            // const errorArr = []
    }
    
    const removeFromDom = itemId => {
        console.log(itemId)
        // axios.delete("http://localhost:8000/api/products/" + itemId)
        // .then((res)=>{
            // console.log(res);
            // console.log(res.data);
            setProductList(productList.filter(item=> item._id !== itemId));
        // })
        // .catch((err)=>console.log(err))
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <Forms onSubmitProp={createProduct} 
            initialTitle="" 
            initialPrice=""
            initialDescription=""/>
            <hr />
            <ProductList productList={productList} removeFromDom={removeFromDom} />

        {/* //commented out code below to refactor     */}
    	{/* /* Form and PRoduct List can both utilize the getter and setter established in their parent component: */ }
            {/* <Forms product={product} setProduct={setProduct} />
            <hr/>
            <ProductList product={product} setProduct={setProduct} removeFromDom= {removeFromDom} /> */}
        </div>
    )
}

export default Main;
