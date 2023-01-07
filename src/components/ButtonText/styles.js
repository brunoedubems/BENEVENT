import styled from "styled-components";
import { Link } from "react-router-dom";
	
export const Container = styled(Link)`

background: none;
color: ${({ theme, isActive}) => isActive ?theme.COLORS.WHITE: theme.COLORS.ORANGE};

border: none;
font-size: 16px;
margin: 0 32px;
`;
