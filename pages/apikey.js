import Head from "next/head";
import Navbar from "../components/Navbar";
import Check from "../components/Check";
import Particle from "../components/Particle";
import Link from "next/link";
import { useState } from "react";
import addUserAPI from "../func/addUsersAPI";
import forgotApiUser from "../func/forgotApiUser";
import { tutupCheck } from "../components/events";

const ApiKey = () => {
    const [nama,setNama] = useState('')
    const [email,setEmail] = useState('')
    const [deskripsi,setDeskripsi] = useState('')

    const generateAPI = async (e) => {
        e.preventDefault()
        const check = document.querySelector('main .check')
        const layarHitamApi = document.querySelector('main .layar-hitam-api')
        const icon = check.querySelector('i')
        const text = check.querySelector('p')
        icon.classList.remove('fa-check')
        icon.classList.remove('fa-xmark')
        icon.classList.remove('text-red-500')
        icon.classList.add('text-blue-500')
        icon.classList.add('fa-rotate')
        text.textContent = 'Tunggu sebentar'
        icon.classList.add('animate-rotate')
        check.classList.remove('-translate-y-full')
        check.classList.remove('opacity-0')
        layarHitamApi.classList.remove('hidden')

        try{
            const {msg} = await addUserAPI({nama,email,deskripsi})
            text.textContent = msg
            icon.classList.remove('animate-rotate')
            icon.classList.remove('fa-rotate')
            icon.classList.add('fa-check')
            layarHitamApi.classList.add('cursor-pointer')

            setNama('')
            setEmail('')
            setDeskripsi('')
        }catch({response}){
            setTimeout(function(){
                text.textContent = response.data.msg
                icon.classList.remove('animate-rotate')
                icon.classList.remove('fa-rotate')
                icon.classList.remove('text-blue-500')
                icon.classList.add('text-red-500')
                icon.classList.add('fa-xmark')
                layarHitamApi.classList.add('cursor-pointer')
            },2000)
        }
    }

    const forgotAPI = async (e) => {
        e.preventDefault()
        const check = document.querySelector('main .check')
        const layarHitamApi = document.querySelector('main .layar-hitam-api')
        const icon = check.querySelector('i')
        const text = check.querySelector('p')
        icon.classList.remove('fa-check')
        icon.classList.remove('fa-xmark')
        icon.classList.remove('text-red-500')
        icon.classList.add('text-blue-500')
        icon.classList.add('fa-rotate')
        text.textContent = 'Tunggu sebentar'
        icon.classList.add('animate-rotate')
        check.classList.remove('-translate-y-full')
        check.classList.remove('opacity-0')
        layarHitamApi.classList.remove('hidden')

        try{
            const {msg} = await forgotApiUser({email})
            text.textContent = msg
            icon.classList.remove('animate-rotate')
            icon.classList.remove('fa-rotate')
            icon.classList.add('fa-check')
            layarHitamApi.classList.add('cursor-pointer')

            setNama('')
            setEmail('')
            setDeskripsi('')
        }catch({response}){
            setTimeout(function(){
                text.textContent = response.data.msg
                icon.classList.remove('animate-rotate')
                icon.classList.remove('fa-rotate')
                icon.classList.remove('text-blue-500')
                icon.classList.add('text-red-500')
                icon.classList.add('fa-xmark')
                layarHitamApi.classList.add('cursor-pointer')
            },2000)
        }
    }


    return <>
    <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name='description' content='Quoteskuy apikey' />
        <link rel="icon" href="/logo.png" />
        <title>Apikey</title>
    </Head>
    <Navbar />
    <Particle />
    <main className="py-3 px-5 sm:px-20 lg:px-60 absolute text-white top-16 left-0 right-0 h-[35rem]">
        <section className='flex items-center mb-1'>
          <i className="fa-solid fa-link mr-1"></i>
          <h1 className='font-bold text-lg sm:text-2xl lg:text-3xl'>API KEY</h1>
        </section>
        <hr className='border border-white bg-white' />
        <Check />
        <section className='layar-hitam-api hidden' onClick={tutupCheck}></section>
        
        <form className="animate-muncul mt-10 border py-5 w-[22rem] sm:w-[30rem] h-96 flex flex-col justify-around bg-white text-black px-5 rounded-md m-auto md:h-[26rem] sm:px-10 transition-all" onSubmit={generateAPI}>
            <h2 className="text-center font-bold mb-5 sm:text-lg md:text-xl lg:text-2xl">Silahkan buat apikey anda</h2>
            <section className=" flex justify-between items-center flex-wrap">
                <label htmlFor="nama" className="md:text-lg">Nama</label>
                <input type="text" placeholder="namamu" className="text-sm outline-none px-2 border border-abu py-1 rounded-sm sm:w-60 md:text-base" id="nama" autoFocus onChange={e => setNama(e.target.value)} required value={nama}/>
            </section>
            <section className=" flex justify-between items-center flex-wrap">
                <label htmlFor="email" className="md:text-lg">Email</label>
                <input type="email" placeholder="email" className="text-sm outline-none px-2 py-1 border-abu border rounded-sm sm:w-60 md:text-base" id="email" onChange={e => setEmail(e.target.value)} required value={email}/>
            </section>
            <section className="flex flex-col">
                <label htmlFor="deskripsi" className="md:text-lg">Deskirpsi</label>
                <textarea id="deskripsi" cols="30" rows="4" className="text-sm outline-none mt-2 p-1 rounded-sm border border-abu" placeholder="deskirpsi penggunaan" onChange={e => setDeskripsi(e.target.value)} required value={deskripsi}></textarea>
            </section>
            <button type="submit" className="bg-blue-500 text-white rounded-sm py-1.5 hover:bg-blue-600 sm:text-lg font-bold">Generate</button>
            <section className="p-1 flex justify-between">
                <Link href={"/"}><a>Kembali</a></Link>
                <button type="button" onClick={forgotAPI}>Lupa apikey</button>
            </section>
        </form>
    </main>
    </>
}
 
export default ApiKey;