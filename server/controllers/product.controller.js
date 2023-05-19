const Product = require('../models/product.model');    /* this is new */

module.exports = {

    // CRUD all in one

    // create
    createNewProduct: (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err));
    },

     // Read (all)
    findAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => {res.json(allProducts)})
        .catch(err => res.status(400).json({msg: "somthing went wrong", error:err}));
    },

    // Read (one)
    findOneSingleProduct: (req, res) => {
        Product.findById(req.params.id)
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
    },

    // update, new is true is going to give the updated value/document, run validators as true means that before we update it will go into our model and say okay, if its in our database we know it passed validations but we want to make sure they're not updating to something that doesn't pass validations, this is having it run validators again. if they are valid then. works with put and patch
    updateExistingProduct: (req, res) => {
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
    },


    // delete
    deleteAnExistingProduct: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err))
    },

    // Random
    showRandomProduct: (req, res) => {
        Product.aggregate([{ $sample: { size: 1 }}])
        .then(randomProduct => res.json(randomProduct[0]))
        .catch(err => res.json(err))
    } 
}
