import { Container } from "./styles";

export function Beneficiario({ data}){
    const keys = Object.keys(data[0])

    return( 
        <Container>
            <table>

                <thead>
                    <tr>
                    { keys.map(key => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                          <tr key ={data.id}>
                          <td>{data.cpf}</td>
                          <td>{data.name}</td>
                          <td>{data.data}</td>
                          <td>{data.equipamento}</td>
                          <td>{data.tecnico}</td>
                      </tr>
              
                 </tbody>
          </table>

        </Container>
    )
 }
