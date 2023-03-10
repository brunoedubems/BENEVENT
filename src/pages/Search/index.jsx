import { Container, Search, Content } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Beneficiario } from "../../components/Beneficiario";
import { FcSearch} from 'react-icons/fc'


export function SearchPerson(){

 const data = [
        {    id: '1', cpf: '458.484.124-55', name: 'Bruno Silva Cunha', data: '05/01/2023', equipamento: 'CRAS', tecnico: 'Gilmara Reis'},
        {    id: '2', cpf: '572.884.674-95', name: 'eduarda Silva Cunha', data: '06/01/2023', equipamento: 'CREAS', tecnico: 'Daniela Reis'},
        {    id: '2', cpf: '572.884.674-95', name: 'eduarda Silva Cunha', data: '06/01/2023', equipamento: 'CREAS', tecnico: 'Daniela Reis'},
        {    id: '2', cpf: '572.884.674-95', name: 'eduarda Silva Cunha', data: '06/01/2023', equipamento: 'CREAS', tecnico: 'Daniela Reis'},
    ];
    
    const head ={
      cpf: 'CPF:',
      name: 'Nome:',
      data: 'Data de entrega:',
      equipamento: 'Equipamento:',
      tecnico: 'Técnico:'
    }

    return(
            <Container>
                <Header />
                    <Search>
                    <Input 
                        placeholder="Pesquisar pelo CPF"
                        icon={FcSearch}
                        />
                    </Search>
                        <Beneficiario data={data} head={head}/>
                        <Content>
                        </Content>
            </Container>  

)
}