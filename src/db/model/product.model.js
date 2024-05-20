import mongoose from "mongoose";
import { ProductSchema } from "../schema/product.schema.js";

export const ProductModel = mongoose.model(
    "Product", 
    ProductSchema, 
    "product_list"
);
