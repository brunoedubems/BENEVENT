import styled from "styled-components";

export const Container = styled.button`

background: none;
color: ${({ theme, isActive}) => isActive ?theme.COLORS.WHITE: theme.COLORS.ORANGE};

border: none;
font-size: 16px;
margin: 0 32px;
`;
