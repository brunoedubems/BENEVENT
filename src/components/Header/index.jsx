import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile,Menu , Logout } from "./styles";
import { ButtonText } from '../ButtonText'



export function Header (){
return(
    <Container>
        <Profile>
            <img 
            src="http://github.com/brunoedubems.png" 
            alt="Foto do usuário" />
        
            <div className="">
                <span>Bem vindo</span>
                <strong>Bruno Eduardo Magalhães</strong>
            </div>
        </Profile>
         <Menu>
                <li><ButtonText title="Início" isActive/></li>
                <li><ButtonText title="Cadastrar"/></li>
                <li><ButtonText title="Buscar"/></li>
         </Menu>
          
        <Logout>
            <RiShutDownLine />
        </Logout>

    </Container>
)
}