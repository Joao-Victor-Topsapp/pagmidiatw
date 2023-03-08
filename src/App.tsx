import TelaPrincipal from './Imgs/TelaPrincipal.png'
import TWLogo from './Imgs/TWLogo.png'
import Clickable from './Template/Button/Clickable'
import Planilha from './Imgs/Planilha.png'
import Telefone from './Imgs/Telefone.png'
import ApertoMao from './Imgs/ApertoMao.png'
import icoWeb from './Imgs/icoWeb.png'
import icoFace from './Imgs/icoFace.png'
import icoInsta from './Imgs/icoInsta.png'
import Suporte from './Imgs/Suporte.png'
import Youtube from './Imgs/Youtube.png'


function App() {
  return(
    <>
    <main className='w-screen h-screen bg-gradient-to-r from-[#fe3331] to-[#fe690e]'>
      <img src={TelaPrincipal} alt="" className='w-full h-full object-cover absolute'/>
      <section className="flex flex-col justify-around pt-0 lg:pt-36 items-center mt-auto w-full h-full z-20 relative">
        <img src={TWLogo} alt="" className='max-w-[clamp(250px,100vw-25px,600px)]'/>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-4 xl:gap-10">
          <Clickable
            url="https://site.twspeed.com.br/combo"
            texto='Conhecer planos'
            imagem={Planilha}
          />
          <Clickable
            url="https://api.whatsapp.com/send?phone=556632110020"/* 6632110030 */ //556632110020 ??
            texto='contratar agora'
            imagem={ApertoMao}
          />
          <Clickable
            url="https://api.whatsapp.com/send?phone=556632110020"
            texto='suporte 24h'
            imagem={Telefone}
          />
          <Clickable
            url="tel:06632110030"
            texto='suporte de plantão'
            imagem={Suporte}
          />
        </div>
        <a href="https://www.twspeed.com.br" className='border-[#f5a209] border-[1px] text-[#f5a209] bg-gray-800 hover:bg-gray-900 transition-colors py-2 px-24 md:px-36 text-lg flex justify-center items-center gap-2'>
          <img src={icoWeb} alt=""/>
          <span>SITE</span>
        </a>
        <div className="flex gap-6">
          <a href="https://www.facebook.com/twspeedtelecom" className='w-14 h-14'>
            <img src={icoFace} alt=""/>
          </a>
          <a href="https://www.instagram.com/twspeedtelecom" className='w-14 h-14'>
            <img src={icoInsta} alt=""/>
          </a>
          <a href="https://www.youtube.com/@twspeedtelecom" className='w-14 h-14'>
            <img src={Youtube} alt=""/>
          </a>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
