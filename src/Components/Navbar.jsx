import { Link } from 'react-router-dom'
import {Sessao_navbar,Box_navbar, Rotas_Styled_Link} from './Styles.js'



const Navbar = () => {
  return(
    <Sessao_navbar>
      <Box_navbar>
        
        <Rotas_Styled_Link to='/'>Home</Rotas_Styled_Link>
        <Rotas_Styled_Link to='/Certificados'>Certificados</Rotas_Styled_Link>
        <Rotas_Styled_Link to='/Projetos'>Projetos</Rotas_Styled_Link>
        <Rotas_Styled_Link to='/Contatos'>Contatos</Rotas_Styled_Link>
        

      </Box_navbar>
    </Sessao_navbar>
  )
}
export default Navbar