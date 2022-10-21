const Footer = () => {
    return ( 
        <footer className="p-8 bg-blue-500 flex flex-wrap justify-around item-center mt-10 text-white" id="kontak">
            <section className="w-80 text-center m-2 sm:text-lg">
                <p className="font-bold">Quoteskuy</p>
                <p className="text-sm mt-2 sm:text-base">Quoteskuy adalah sebuah layanan rest api yang dapat diakses secara gratis</p>
            </section>
            <section className="w-80 text-center m-2">
                <p className="font-bold mb-2 sm:text-lg">Kontak</p>
                <a href="https://www.instagram.com/mzdn404/?hl=id" className="mr-3" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://github.com/Muizzuddin-github" className="mr-3" rel="noreferrer" target="_blank">Github</a>
            </section>
        </footer>
     );
}
 
export default Footer;