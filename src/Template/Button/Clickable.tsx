import React from 'react'
interface props{
    texto: string,
    imagem: string
    url:string
}
export default function Clickable({
    texto,
    imagem,
    url
}:props) {
  return (
    <a className='flex items-center group' href={url}>
        <div className="rounded-full w-20 h-20 bg-gray-800 z-10 ">
            <img src={imagem} alt="" className='w-full h-full object-contain' />
        </div>
        <div className='border-[#fb9d05] border-[1px] h-12 group-hover:brightness-105 group-hover:rounded transition-all relative -left-2 bg-[#eb7c00] uppercase text-white font-semibold text-md justify-center flex items-center p-4'>
            {texto}
        </div>
    </a>
  )
}
