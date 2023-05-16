import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { ItemId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + ItemId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button className="m-2 btn btn-danger" onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;