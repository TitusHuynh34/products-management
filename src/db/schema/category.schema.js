import mongoose from "mongoose";

export const CategorySchema = new mongoose.Schema({
    //Tên danh mục
    name: {
        type: String,
    },
    //Mô tả danh mục
    desc: {
        type: String,
        },
})