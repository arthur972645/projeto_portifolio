

import ImagemLogo from '../asetens/ImagemLogo.png'
import {Div_Footer, Sessao_info,  Info,Info_h1,Sessao_imagemLogo, Img } from './Styles'

const Footer = () => {
  return(
    <section className="sessao_Footer">
      <Div_Footer>
        <Sessao_info>
          <Info className='Info'>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
            </Info>
            <Info className='Info'>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
            </Info>
            <Info className='Info'>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
            </Info>
            <Info className='Info'>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
              <Info_h1>Não sei o que colocar</Info_h1>
            </Info>
        </Sessao_info>
          <hr />
          <Sessao_imagemLogo >
            <Img src={ImagemLogo} alt="" />
          </Sessao_imagemLogo >
      </Div_Footer>
      
    </section>
  )
}
export default Footer