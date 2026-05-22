const express = require("express");
const AllCategoryRouter = express.Router();
console.log("Allcategory request recived......");

//Import Model
const Category=require("../Models/AllCategory.model")

//Imports
const AllCategoryController=require("../Controllers/AllCategory.controller")


// //Route Paths
// /* 
// @route -/user/create-product
// @accesss- public
// @controller -creatproduct
//  */
AllCategoryRouter.post("/create-product",AllCategoryController.createProduct);


// /*
// @Route - /user/get-All-Products , 
// @Access - Private
// @Controller - getAllProduct 
// */
//http:localhost:8000/api/product/get-All-Products
AllCategoryRouter.get("/get-All-Products",AllCategoryController.getAllProducts);



module.exports = AllCategoryRouter;