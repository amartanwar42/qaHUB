const mongoose= require('mongoose');
const { Schema }=mongoose

const shareKnowledgeFormSchema= new Schema({
    title: {type: String, required:true, trim:true,unique: true},
    type: {type: String, required:true},
    category:{type: String, required:true},
    link:{type:String,required:true,unique: true},
    description:{type: String, required:true,unique: true},
    imagePath:{type: String},
    status :{type: String, default: "pending", required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'users'},
    createdDate: {type: Date, required:true},
    lastUpdatedDate: {type: Date, required:true}  
})

mongoose.model("shareKnowledgeForm",shareKnowledgeFormSchema)