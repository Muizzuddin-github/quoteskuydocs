import Link from "next/link"
import { tutup } from "./events"

const Navbar = () => {

    const toggleKlik = () => {
        const menu = document.querySelector('nav .menu')
        const toggleFirst = document.querySelector('nav .toggle section:first-child')
        const layar = document.querySelector('.layar-hitam')
        menu.classList.toggle('translate-x-full')
        menu.classList.toggle('opacity-0')
        toggleFirst.classList.toggle('w-10')
        toggleFirst.classList.toggle('w-5')
        toggleFirst.nextElementSibling.nextElementSibling.classList.toggle('w-10')
        toggleFirst.nextElementSibling.nextElementSibling.classList.toggle('w-5')
        layar.classList.toggle('hidden')
    }


    return (
        <nav className="bg-blue-500 flex items-center py-3 justify-between px-4 fixed w-full top-0 z-10 text-white">
            <h1 className="text-[1.7rem] font-bold cursor-default">Quoteskuy</h1>

            <section className="toggle flex flex-col justify-between h-8 z-30 sm:hidden" onClick={toggleKlik}>
                <section className="h-1.5 w-10 rounded-md bg-white transition-all ease-linear duration-300"></section>
                <section className="h-1.5 w-10 rounded-md bg-white"></section>
                <section className="h-1.5 w-10 rounded-md bg-white transition-all ease-linear duration-300 self-end"></section>
            </section>
            <section className='layar-hitam hidden' onClick={tutup}></section>
            <ul className="menu flex translate-x-full opacity-0 transition-all ease-linear duration-300 fixed right-0 top-16 flex-col h-[18.3rem] p-5 w-2/4 items-center justify-around text-white bg-white rounded-md z-30 sm:opacity-100 sm:translate-x-0 sm:flex-row sm:top-3 sm:rounded-none sm:h-0 sm:bg-transparent sm:text-lg md:w-[29rem] lg:w-[38rem] font-bold">
                <li><Link href={"/"}><a className="p-2 sm:px-0 bg-blue-500 rounded-md sm:bg-transparent sm:rounded-none sm:hover:border-b-2">Beranda</a></Link></li>
                <li><a href="#panduan" className="p-2 sm:px-0 bg-blue-500 rounded-md sm:bg-transparent sm:rounded-none sm:hover:border-b-2">Panduan</a></li>
                <li><a href="#kontak" className="p-2 sm:px-0 bg-blue-500 rounded-md sm:bg-transparent sm:rounded-none sm:hover:border-b-2">Kontak</a></li>
                <li><Link href={"/apikey"}><a className="p-2 sm:px-0 bg-blue-500 rounded-md sm:bg-transparent sm:rounded-none sm:hover:border-b-2">Api key</a></Link></li>
            </ul>
        </nav>
    )
}
 
export default Navbar;