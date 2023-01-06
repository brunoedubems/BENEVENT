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
        text-align: center;
    }

.pesquisar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 24px;
}

img{
    height: 40px;
    width:40px ;
}

button{
    width: 200px;
    margin: 5px 20px;
    align-items: center;
}

input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
}

input[type="date"]{
    padding: 10px;
    width: 205px;
    border: none;
    outline: none;
    border-radius: 5px;
    text-align: center;
}


`;

