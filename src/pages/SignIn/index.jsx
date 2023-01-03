import {  useState} from 'react';
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { useAuth } from '../../hooks/auth';
import { Container, Form, Background } from "./styles";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password})
    }

    return(
        <Container>
            <Form>
                <h1>BENEVENT</h1>
                <p>Cadastramento de Cestas Básicas - 2023</p>

                <h2>Faça Seu Login</h2>

                    <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <Button title="Entrar" onClick={handleSignIn}/>
            </Form>

<Background />
        </Container>
    )

}
