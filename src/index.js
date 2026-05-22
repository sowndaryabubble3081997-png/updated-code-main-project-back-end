const express = require("express");
const cors = require("cors");


const connectDB = require("./Config/db.Config");
require("dotenv").config();
const app = express();

connectDB();

// CORS Fix
app.use(cors()); 

app.use(express.json());


// IMPORT ROUTER
const Commentrouter = require("./routers/Comment.route");
const UserRouter=require("./routers/User.route")
const SpiceRouter=require("./routers/Spice.route")
const Reciperouter=require("./routers/Recipe.route")
const ProductRouter=require("./routers/Product.route")
const OrderRouter=require("./routers/Order.route");
const DashboardRouter=require("./routers/Dashboard.route")
const AllCategoryRouter=require("./routers/Allcategory.route");


// CONNECT ROUTER

app.use("/api/product", ProductRouter);
app.use("/api/useraccounts", UserRouter);
app.use("/api/orderdetails", OrderRouter);
app.use("/api/dashboard", DashboardRouter);
app.use("/api/allcategory", AllCategoryRouter);
app.use("/api/allcomments", Commentrouter);
app.use("/api/spices", SpiceRouter);
app.use("/api/recipe", Reciperouter);



   



app.listen(8000, () => {
  console.log("Server running on port", 8000);
});