import MongoUsers from "../../../database/schemaUsers";
import bcrypt from 'bcryptjs'
import validator from "validator"
import generateApiKey from 'generate-api-key';
import sendEmail from "../../../func/sendEmail";

export default async function apiAdd(req, res) {
  if(req.method !== "POST") return res.status(405).json({msg : "Method Not Allowed"})

  try{
    const {nama,email,deskripsi} = req.body
    const checkUser = await MongoUsers.find({email})

    if(nama.length <= 3) return res.status(400).json({msg : "Nama minimal 4 huruf"})
    if(!validator.isEmail(email)) return res.status(400).json({msg : "Yang anda masukkan bukan email"})
    if(deskripsi.length <= 12) return res.status(400).json({msg : "Deskirpsi terlalu pendek"})
    if(checkUser.length) return res.status(400).json({msg : "Anda sudah mendapatkan apikey"})
    
    const key = generateApiKey({ method : 'bytes',min : 16 })
    const salt = bcrypt.genSaltSync(10)
    const hashKey = bcrypt.hashSync(key,salt)

    const addUser = new MongoUsers({nama,email,deskripsi,apikey : hashKey,ubah : process.env.KSMP})
    await addUser.save()

    const apiID = addUser._id.toString()
    await sendEmail(apiID,key,email)

    return res.status(201).json({msg : "Silahkan check email anda"})
  }catch(err){
    return res.status(500).json({msg : err.message})
  }
}
