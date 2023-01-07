 import { Container } from './styles';
import { Header } from "../../components/Header";
import { Input } from '../../components/Form';
import  { Button } from "../../components/Button";
import iconSearch from '../../assets/icon-search.svg'

export function Register(){//todo componente tem começar com a letra Maiúscula 

  return(
    <Container>
      <Header/>

    <main>
      <h1>Cadastramento de cesta Básica </h1>
     <form action="#" method="post">
        <div className="pesquisar">
        <Input type="number" text="CPF do Beneficiário" name="cpf" ></Input>

        <img src={iconSearch} alt="ícone de pesquisar" class="icon"/>

        </div>
        

         <Input type="date" text="Data de entrega" name="dataEntrega" ></Input>
         <Input type="text" text="Quantidade de Membros familiar" name="membroFamiliar" ></Input>

         <Input type="text" text="Nome do Beneficiário" name="nome" ></Input>
         <Input type="number" text="NIS" name="nis" ></Input>
         <Input type="date" text="Data de Nascimento" name="dataDeNascimento" ></Input>
         <Input type="text" text="Localidade" name="localidade" ></Input>
         <Input type="text" text="Endereço" name="localidade" ></Input>
         <Input type="text" text="Numero" name="numero" ></Input>
         <Input type="text" text="Complemento" name="complemento" ></Input>
         <Input type="text" text="Celular" name="celular" ></Input>

         <Button title="Voltar" class="buttonBack"/>
         <Button title="Salvar" class="buttonRegister" />
      </form> 
    </main>
    </Container>
  )
}  