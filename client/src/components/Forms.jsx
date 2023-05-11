import React, { useState } from 'react';
import axios from 'axios';


const Forms = (props) => {
  // no longer using after refactoring code
  // const {product, setProduct} = props;
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");

  const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmitProp({ title, price, description });
}

  //commented out, no longer using code below after refactoring
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:8000/api/products/', {
  //     title,
  //     price,
  //     description
  //   })
  //     .then (res => {
  //       console.log(res);
  //       console.log(res.data);
  //       setProduct ([...product, res.data]);
  //     }
  //     )
  //     .catch (err => console.log(err))
  //     setTitle("")
  //     setPrice("")
  //     setDescription("")
  // }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h1>Product Manager</h1>
                <p>
                  
                    <label className="mx-3"  >Title</label>
                    <input type="text" name="title" onChange = {(e) => setTitle(e.target.value)} value={title}/>
                </p>

                <p>
                    <label className="mx-3">Price</label>
                    <input type="text" name="price" onChange = {(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    <label className="mx-3">Description</label>
                    <input type="text" name="description" onChange = {(e) => setDescription(e.target.value)} value={description}/>
                </p>
                <input type="submit" />
            </form>
        
    </div>
  )
}

export default Forms