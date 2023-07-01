const AllProducts = require("../models/allProductModel")

exports.createAllProduct = async (req,res,next)=>{
    const allProducts = await AllProducts.create(req.body);
    res.status(201).json({
        success:true,
        allProducts
    })
}
 
exports.getAllProducts = (req, res) => {
  res.status(200).json({ message: "Products route is functioning" });
};
