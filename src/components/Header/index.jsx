import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile,Menu , Logout } from "./styles";
import { ButtonText } from '../ButtonText'



export function Header (){
return(
    <Container>
        <Profile to="/profile">
            <img 
            src="http://github.com/brunoedubems.png" 
            alt="Foto do usuário" />
        
            <div className="">
                <span>Bem vindo</span>
                <strong>Bruno Eduardo Magalhães</strong>
            </div>
        </Profile >
         <Menu>
                <li><ButtonText to="/" title="Início"/></li>
                <li><ButtonText to="/register"title="Cadastrar"/></li>
                <li><ButtonText to="/search"title="Buscar" isActive/></li>
    
         </Menu>
          
        <Logout>
            <RiShutDownLine />
        </Logout>

    </Container>
)
}