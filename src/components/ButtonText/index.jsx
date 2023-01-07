import { Container } from "./styles";

export function ButtonText ({ title,isActive = false, to, ...rest}){
    return (
        <Container
        type="button"
        isActive={isActive}
        to={to}
        {... rest}>
            {title }
        </Container>
    );
}