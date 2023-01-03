import styled from "styled-components";
import backgroundImg from '../../assets/BG.svg';

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: center;
justify-content: center;

`;


    export const Form = styled.div`

    padding: 20px 80px 60px ;
    border-radius: 14px;
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-color: ${({ theme }) =>theme.COLORS.BACKGROUND_800 };

        > h1 {
            font-size: 28px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > h2 {
            font-size: 16px;
            margin: 18px 0;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > p {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > a {
            margin-top: 124px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

      `;

    export const Background = styled.div`
    background: url(${backgroundImg}) center center / cover no-repeat;
    position: static;
    height: 100%;
    width: 100%;
`;

