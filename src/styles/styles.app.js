import styled from "styled-components";
export const Container = styled.div`
width:100%;
height:100vh;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;

>div{
  display: flex;
  justify-content:center;
  align-items:center;
  margin-top: 4rem;

  >div{
    >span{
      color: var(--gray);
      font-size: 3.5rem;
    }
    >input{
      border: 0;
      font-size: 3.5rem;
      width: 9rem;
      background: transparent;
      }
      &:hover{
        background:#e7f4c9
      }
    }
    >span{
    color: var(--primary);
    font-size: 1.3.rem;
  }
}
`