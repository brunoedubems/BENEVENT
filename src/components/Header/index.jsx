import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";



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
        <Logout>
            <RiShutDownLine />
        </Logout>

    </Container>
)
}