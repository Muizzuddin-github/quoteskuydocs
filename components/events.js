export const tutupCheck = () => {
    const check = document.querySelector('main .check')
    const layarHitamApi = document.querySelector('main .layar-hitam-api')
    const icon = check.querySelector('i')
    if(icon.classList.contains('animate-rotate')) return

    check.classList.add('-translate-y-full')
    check.classList.add('opacity-0')
    layarHitamApi.classList.remove('cursor-pointer')
    layarHitamApi.classList.add('hidden')
}


export const tutup = () => {
    const menu = document.querySelector('nav .menu')
    const toggleFirst = document.querySelector('nav .toggle section:first-child')
    const layar = document.querySelector('.layar-hitam')
    menu.classList.toggle('translate-x-full')
    menu.classList.toggle('opacity-0')
    toggleFirst.classList.toggle('w-10')
    toggleFirst.classList.toggle('w-5')
    toggleFirst.nextElementSibling.nextElementSibling.classList.toggle('w-10')
    toggleFirst.nextElementSibling.nextElementSibling.classList.toggle('w-5')
    layar.classList.add('hidden')
}