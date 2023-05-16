const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters long"],
        maxlength: [55, "Title must be at least 55 characters long"]

    },
    price: { type: String,
        required: [true, "Price is required"],
        minlength: [2, "Price must be at least 2 characters long"],
        maxlength: [55, "Price must be at least 55 characters long"]
    },
    description: { type: String,
        required: [true, "Description is required"],
        minlength: [2, "Description must be at least 2 characters long"],
        maxlength: [55, "Description must be at least 55 characters long"]
    }
}, { timestamps: true });
module.exports = mongoose.model('Product', ProductSchema);
