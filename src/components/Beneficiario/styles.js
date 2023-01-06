import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;

> table{
  margin: 20px 20px;
  width: 90%;

  background-color: ${({ theme}) => theme.COLORS.ORANGE};
  padding: 10px;
  border-radius: 14px;


  border-spacing:24px  0;

  th{
   color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
    padding: 6px 6px;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
  }

}

  `
