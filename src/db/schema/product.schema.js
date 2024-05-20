import mongoose, { Schema, SchemaType } from "mongoose";


// Định nghĩa cấu trúc dữ liệu cho sản phẩm
export const ProductSchema = new mongoose.Schema({
    //Tên sản phẩm
    name: {
        type: String,
    },
    //Mô tả sản phẩm
    desc: {
        type: String,

    },
    //Số lượng sản phẩm trong kho
    unitInstock: {
        type: Number,
    },
    //Giá sản phẩm
    price: {
        type: Number,
    },
    //Danh muc ID
    categoryId: {
        type: mongoose.Types.ObjectId,
        },
    });
