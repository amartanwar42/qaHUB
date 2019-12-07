const mongoose = require('mongoose')
const { Schema } = mongoose;

const categorySchema= new Schema({
    categoryName : {type: String, trim: true, required: true, unique: true},
    categoryDescription : {type: String,trim: true, required: true,unique: true},
    imagePath:{type: String,trim: true, required: true,unique: true},
    createdDate: {type: Date, required:true},
    lastUpdatedDate: {type: Date, required:true}
})

mongoose.model("category",categorySchema)