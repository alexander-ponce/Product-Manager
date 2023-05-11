import React, { useState } from 'react'
import axios from 'axios';
import Forms from '../components/Forms';
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [product, setProduct] = useState([]);

    const removeFromDom = itemId => {
        setProduct(product.filter(item => item._id != itemId)); //We could also write this in our ProductList component
    }
    
    return (
        <div>
    	{/* /* Form and PRoduct List can both utilize the getter and setter established in their parent component: */ }
            <Forms product={product} setProduct={setProduct} />
            <hr/>
            <ProductList product={product} setProduct={setProduct} removeFromDom= {removeFromDom} />
        </div>
    )
}

export default Main
