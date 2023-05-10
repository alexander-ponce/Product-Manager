import React, { useState } from 'react'
import axios from 'axios';
import Forms from '../components/Forms';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [product, setProduct] = useState([]);
    
    return (
        <div>
    	{/* /* Form and PRoduct List can both utilize the getter and setter established in their parent component: */ }
            <Forms product={product} setProduct={setProduct} />
            <hr/>
            <ProductList product={product} setProduct={setProduct} />
        </div>
    )
}
export default Main;
