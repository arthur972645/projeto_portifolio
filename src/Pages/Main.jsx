import'./Styles_Pages.css'
import Imamgem_Logo from '../asetens/PORTFÓLIO.png'
import Buttons from '../Components/Buttons'

const Main = () => {
  return(
    <section className='Sessao_Main'>
      <section className='Info_Pessoal'>
        <section className='Imagem_Logo'>
          <img src={Imamgem_Logo} alt="" />
        </section>
        <section className='Sessao_Paragrafo'>
          <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione enim labore culpa eligendi consequatur! Sapiente quo eaque, recusandae praesentium numquam repudiandae unde ea, asperiores voluptatibus quasi molestiae quos officia. Temporibus?</p>
        </section>
        <section className='Btns'>
          <Buttons/>
        </section>
      </section>
      
      
      
      
      <section className='Sessao_Imagem_Pessoal'>
        <h1>ioio</h1>
      </section>
    </section>
  )
}
export default Main