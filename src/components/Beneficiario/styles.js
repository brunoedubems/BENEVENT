import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 100%;

> table{
  margin: 20px auto;
  width: 90%;

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  border-spacing: 0;
  text-align: center;
  border-radius: 14px;

  th{
   background-color: ${({ theme}) => theme.COLORS.ORANGE};
    padding: 6px 6px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
  }

  
}
td{
  color: ${({ theme}) => theme.COLORS.BACKGROUND_900};
  border: 1px solid #4C4C4C;
  padding: 3px 8px;

}
thead th:first-child{
  border-radius: 14px 0 0 0 ;
}
thead th:last-child{
  border-radius: 0 14px 0 0 ;
}

tr:nth-child(even) {
  background: #F5F5F5;
}


  `
