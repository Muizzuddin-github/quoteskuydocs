import nodemailer from 'nodemailer'

export default async function(apiID,key,email){
    const sender = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
        user: process.env.SECRET_EMAIL, 
        pass: process.env.SECRET_EMAIL_PASS
        }
    })

    return await sender.sendMail({
        from : 'Quoteskuy',
        to : email,
        subject : "Apikey anda",
        html : `<h2>dari Quoteskuy ini adalah api key anda </h2>
        <ul>
            <li>X-API-ID : ${apiID}</li>
            <li>X-API-KEY : ${key}</li>
        </ul>
        <p>ingat jangan menyebarkan apikey anda</p>
        <p>dan anda memiliki 3 kali kesempatan untuk mengubah apikey anda jika anda lupa</p>
        <p>gunakan fitur lupa apikey dengan bijak</p>`
    })
}