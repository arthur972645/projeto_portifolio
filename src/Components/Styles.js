import {Link} from 'react-router-dom'
import styled from "styled-components";


export const Sessao_navbar = styled.section`
display: flex;
align-items: center;
justify-content: center;
margin-top: 20px;
`

export const Box_navbar = styled.div`
  display: flex;
  justify-content: center; 
  justify-content: space-around;
  align-items: center;
  width: 800px;
  height: 50px;
  background-color: #1A1E29;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 32px -12px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 32px -12px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 32px -12px rgba(0,0,0,0.75);
`
export const Rotas_Styled_Link = styled(Link)`
color: #ffff;
font-family: 'Montserrat', sans-serif;
font-size: 15px;
transition: 0.3s ease;
cursor: pointer;
font-weight: 500;
text-decoration: none;

&:hover{
  color: #01C38E;
  text-shadow: 0 0 8px  #00ffbb, 0 0 100px;
  font-size: 17px;
}
`
// FOOTER
export const Div_Footer=styled.div`
background-color: #1A1E29;
height: 300px;
padding: 30px;
`
export const Sessao_info=styled.section`
display: flex;
justify-content: space-around;
`

export const Info = styled.section`
color: #ffff;
font-family: 'Montserrat', sans-serif;
font-size: 13px;
width: 200px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Info_h1 = styled.h1`
margin-top: 5px;
font-weight: 200;
`

export const Sessao_imagemLogo = styled.section`
display: flex;
justify-content: center;
margin-top: 15px;

`

export const Img = styled.img`
height: 30px;
transition: 0.3s ease;

&:hover{
  height: 35px;

}
`

//BUTTONS

export const Sessao_Btns = styled.section`
border: 2px solid red ;
height: 70px;
display: flex;
align-items: center;
justify-content:space-around;
`

export const Estilizacao_Btns = styled.button`
height: 40px;
width: 170px;
border: none;
border-radius: 20px;
background-color: #1A1E29;
color: #ffff;
font-family: 'Montserrat', sans-serif;
font-size: 15px;
font-weight: bold;
transition: 0.3s ease;
cursor: pointer;

&:hover{
  background-color: #01C38E;
   box-shadow: 0 0 8px  #00ffbb, 0 0 100px;
   
 }
`
