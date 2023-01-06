import { Container} from './styles';
import { Fragment } from 'react';
export function Input({ type, text, name, placeholder,icon, handleOnChange, value }) {

return (
    <Container>
        <label htmlFor={name}>{text}:</label>
        <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        />
    </Container>
)
}

export default Input;