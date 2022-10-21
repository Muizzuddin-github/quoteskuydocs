import MongoUsers from "../../../database/schemaUsers"
import validator from "validator"
import generateApiKey from "generate-api-key"
import bcrypt from 'bcryptjs'
import sendEmail from "../../../func/sendEmail"

export default async function apiForgot(req,res){
    if(req.method !== "PATCH") return res.status(405).json({msg : "Method Not Allowed"})

    try{
        const {email} = req.body
        if(!email.length) return res.status(400).json({msg : "Masukkan email terlebih dahulu"})

        if(!validator.isEmail(email)) return res.status(400).json({msg : "Yang anda masukkan bukan email"})

        const checkUser = await MongoUsers.find({email})
        if(!checkUser.length){
            return res.status(404).json({msg : "Silahkan buat apikey terlebih dahulu"})
        }else if(!checkUser[0].ubah){
            return res.status(429).json({msg : "Anda telah mencapai batas untuk mengubah apikey anda"})
        }

        const key = generateApiKey({ method : 'bytes',min : 16 })
        const salt = bcrypt.genSaltSync(10)
        const hashKey = bcrypt.hashSync(key,salt)
        await MongoUsers.updateOne({email},{$set : {apikey : hashKey,ubah : checkUser[0].ubah - 1}})

        const apiID = checkUser[0]._id.toString()
        await sendEmail(apiID,key,email)

        return res.status(200).json({msg : 'Apikey telah diperbaharui silahkan check email anda',})
    }catch(err){
        return res.status(500).json({msg : err.message})
    }
}