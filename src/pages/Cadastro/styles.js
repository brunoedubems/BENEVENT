import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    >main{
        grid-area : content;
        padding: 14px 24px;
        margin: 14px auto; 
        border-radius: 14px;

        background-color: ${({ theme }) => theme.COLORS.WHITE};
        }
h1{
    margin-bottom: 34px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    justify-content: center;
}

`;


// export const Content = styled.div`


// `;