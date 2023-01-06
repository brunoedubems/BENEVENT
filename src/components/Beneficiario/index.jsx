import { Container } from "./styles";

export function Beneficiario({ data, head}){
    const keys = Object.keys(data[0])

const Head = ({keys, head}) => {
    return (
        <thead>
        <tr>

     { 
     keys.map((key) => ( <th key={key}>{head[key] || key}</th>))
        }
        </tr>
        </thead>
    )
}



    const Row = ( {record}) => {
    const keys = Object.keys(record)
        return (
            <tr key={record.id}>
                {
                keys.map((key) => {return <td key={key}>{record[key]}</td>})
                }                            
            </tr>
        )
    }


    return( 
        <Container>
            <table>

        <Head keys={keys} head={head}/>

                <tbody>
                          { 
                          data.map(record => <Row record={record}/>) 
                           }
                 </tbody>
          </table>

        </Container>
    )
 }
