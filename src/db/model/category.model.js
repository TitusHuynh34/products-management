import mongoose from "mongoose";
import { CategorySchema } from "../schema/category.schema.js";

export const CategoryModel = mongoose.model(
  "Category",
  CategorySchema,
  "category"
);
