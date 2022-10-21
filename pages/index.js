import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'
import getQuotesToday from '../func/getQuotesToday'
import { useEffect } from 'react'


export default function Home({quotes,author}) {

  useEffect(function(){
    const html = document.querySelector('html')
    const nav = document.querySelector('nav')
    html.classList.add('scroll-smooth')

    document.addEventListener('scroll',function(e){
      if(scrollY >= 290){
        nav.classList.remove('bg-transparent')
        nav.classList.add('bg-blue-500')
      }else{
        nav.classList.remove('bg-blue-500')
        nav.classList.add('bg-transparent')
      }
    })

  },[])

  return <>
    <Head>
      <title>Quoteskuy</title>
      <meta charSet="UTF-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name='description' content='Quoteskuy rest api' />
      <link rel="icon" href="/logo.png" />
    </Head>
    <Navbar />
    <header className='bg-blue-500 flex flex-col items-center pt-16 text-white h-[25rem] sm:h-[28rem]'>
      <figure className='mt-1 sm:mt-4'>
        <Image src={'/logo.png'} width={"150px"} height={'150px'} alt="logo Quoteskuy" objectFit='contain' title='Quoteskuy'/>
      </figure>
      <section className='sm:w-2/3 lg:w-[48rem] break-all p-3 sm:p-0'>
        <p className='text-center -mt-2 sm:text-xl font-bold break-all italic'>&quot; {quotes} &quot;</p>
      </section>
        <p className='mt-3 sm:text-xl sm:mt-8'>{author}</p>
    </header>
    <main className='pb-4 pt-10'>
      <article className='about text-center px-5 sm:mt-3 sm:w-2/3 lg:w-[40rem] m-auto'>
        <h2 className='font-bold mb-1 text-lg sm:text-2xl'>Tentang</h2>
        <p className='text-sm sm:text-lg'>Quoteskuy adalah sebuah layanan rest API yang dapat diakses secara publik yang menyediakan macam macam quotes</p>
      </article>

      <section className='fitur p-5 mt-5 text-center sm:mt-7'>
        <h2 className='font-bold mb-1 text-lg sm:text-2xl'>Fitur</h2>
        <section className='flex flex-wrap justify-around items-center'>
          <section className='p-3 flex justify-center items-center flex-col text-center border w-80 m-2 rounded-t-md hover:scale-105 transition-all ease-linear sm:w-96'>
            <section className='border border-abu-abu shadow-md rounded-[100%] w-16 h-16 flex items-center justify-center'>
                <i className="fa-regular fa-lightbulb text-3xl"></i>
            </section>
            <h3 className='font-bold mb-2 mt-4 sm:text-lg'>Menginspirasi</h3>
            <p className='leading-5 text-sm sm:text-base'>anda akan memperoleh qote yang menginspirasi dari berbagai penulis dan juga inspirasi dari novel</p>
          </section>

          <section className='p-3 flex justify-center items-center flex-col text-center border w-80 m-2 hover:scale-105 transition-all ease-linear sm:w-96'>
            <section className='border border-abu-abu shadow-md rounded-[100%] w-16 h-16 flex items-center justify-center'>
                <i className="fa-solid fa-key text-2xl"></i>
            </section>
            <h3 className='font-bold mb-2 mt-4 sm:text-lg'>Api key</h3>
            <p className='leading-5 text-sm sm:text-base'>sebelum anda mengakses Quoteskuy anda harus membuat sebuah api key terlebih dahulu</p>
          </section>

          <section className='p-3 flex justify-center items-center flex-col text-center border w-80 m-2 rounded-b-md hover:scale-105 transition-all ease-linear sm:w-96'>
            <section className='border border-abu-abu shadow-md rounded-[100%] w-16 h-16 flex items-center justify-center'>
            <i className="fa-solid fa-globe text-2xl"></i>
            </section>
            <h3 className='font-bold mb-2 mt-4 sm:text-lg'>Request tak terbatas</h3>
            <p className='leading-5 text-sm sm:text-base'>anda dapat melakukan request tanpa mempredulikan batasan saat melakukan request</p>
          </section>
        </section>
      </section>

      <section className='panduan border-black py-20 mt-20 px-2 sm:px-48' id='panduan'>
        <section className='flex items-center mb-1'>
          <i className="fa-solid fa-link mr-1"></i>
          <h2 className='font-bold text-lg sm:text-2xl'>Panduan</h2>
        </section>
        <hr className='border border-black bg-black' />
        <p className='mt-4 sm:text-lg'>mengambil quote secara acak</p>

        <section className='url mt-5 p-2 flex justify-between rounded-sm bg-abu-abu text-sm sm:text-base'>
          <p>https://quoteskuy-65d4.vercel.app/api/quotes</p>
        </section>
        <section className='mt-5 sm:text-lg sm:mt-8'>
          <p>Javascript</p>
          <section className='text-sm mt-2 pl-2 sm:text-base sm:ml-3'>
            <p>const options = {'\u007B'}</p>
            <p>&nbsp;&nbsp;&nbsp;headers: {'\u007B'}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;X-API-ID&quot; : api id</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;X-API-KEY&quot; : api key</p>
            <p>&nbsp;&nbsp;&nbsp;{'\u007D'}</p>
            <p>{'\u007D'}</p>
            <p className='mt-1 sm:text-base'>fetch(url,options)</p>
            <p>.then(res {'\u003D\u003E'} res.json()).then(res {'\u003D\u003E'} console.log(res))</p>
          </section>
          <p className='mt-4 sm:text-lg sm:mt-8'>Node js</p>
          <section className='text-sm mt-2 pl-2 sm:text-base sm:ml-3'>
            <p>import https from &apos;https&apos; // const https = required(&quot;https&quot;)</p>
            <p>const options = {'\u007B'}</p>
            <p>headers: {'\u007B'}</p>
            <p>&quot;X-API-ID&quot; : api id</p>
            <p>&quot;X-API-KEY&quot; : api key</p>
            <p>&nbsp;&nbsp;&nbsp;{'\u007D'}</p>
            <p>{'\u007D'}</p>
            <p>https.get(url,options,function(res){'\u007B'}</p>
            <p>&nbsp;&nbsp;&nbsp;res.on(&apos;data&apos;,d {'\u003D\u003E'} {'\u007B'}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const hasil = JSON.parse(d.toString())</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(hasil)</p>
            <p>&nbsp;&nbsp;&nbsp;{'\u007D'})</p>
            <p>{'\u007D'})</p>
          </section>
        </section>
      </section>

      <section className='kategori p-2 mt-10 sm:px-48'>
        <section className='flex items-center mb-1'>
            <i className="fa-solid fa-link mr-1"></i>
            <h2 className='font-bold text-lg sm:text-2xl'>Kategori</h2>
        </section>
        <hr className='border border-black bg-black' />
        <p className='mt-4 sm:text-lg'>kami menyediakan beberapa kategori yang dapat anda pilih diantaranya sebagai berikut </p>
        <ul className='mt-5 list-disc ml-4 sm:text-lg'>
        <li>Pendidikan</li>
        <li>Motivasi</li>
        <li>novel</li>
        <li>Islam</li>
        </ul>
        <section className='url mt-5 p-2 flex justify-between rounded-sm bg-abu-abu text-sm sm:text-lg'>
          <p>/api/quotes?categori=pendidikan</p>
        </section>
        <p className='mt-4 sm:text-lg'>anda dapat menambahkan kategori yang anda piilh pada bagian query string diurlnya dan resposenya kategori yang acak</p>
      </section>

      <section className='hari-ini p-2 mt-10 sm:px-48'>
        <section className='flex items-center mb-1'>
              <i className="fa-solid fa-link mr-1"></i>
              <h2 className='font-bold text-lg'>Quote hari ini</h2>
        </section>
        <hr className='border border-black bg-black' />
        <p className='mt-4'>kami juga menyediakan quote yang dapat berubah sehari sekali, untuk cara aksesnya sebagai berikut</p>
        <section className='url mt-5 p-2 flex justify-between rounded-sm bg-abu-abu text-sm'>
          <p>/api/quotes/today</p>
        </section>
        <p className='mt-3'>anda akan memperoleh quote hari ini, dimana quote hari ini akan melakukan reset quote setiap hari secara otomatis pada saat melakukan request</p>
      </section>
    </main>
    <Footer />
  </>
}





export async function getServerSideProps(context) {


  const {data} = await getQuotesToday()

  return {
    props: {
      quotes : data.quotes.quote,
      author : data.quotes.author
    }
  }
}