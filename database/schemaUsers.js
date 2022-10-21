import mongoose from "mongoose";

mongoose.connect(process.env.DB_CLIENT)
const db = mongoose.connection
db.on('err',err => console.log(err))


const schemaUsers = mongoose.Schema({
    'nama' : String,
    'email' : String,
    'deskripsi' : String,
    'apikey' : String,
    'ubah' : Number
})

mongoose.modelNames().forEach(function(schemaName){
    mongoose.deleteModel(schemaName)
})

const MongoUsers = mongoose.model('users',schemaUsers,'users')
export default MongoUsers