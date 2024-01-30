import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 1000px;
`;

export const Legend = styled.legend`
  color: ${({ theme }) => theme.color.SherpaBlue};
  font-size: 40px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.SherpaBlue};
  font-size: 25px;
  align-items: center;
`;



export const Select = styled.select`
  font-size: large;
  width: 100%;
  border-radius: 6px;
  border: solid 1px ${({ theme }) => theme.color.CodGrey};
  padding: 10px;

`;

export const Input = styled.input`
  font-size: large;
  width: 100%;
  border-radius: 6px;
  border: solid 1px ${({ theme }) => theme.color.CodGrey};
  padding: 10px;

`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.color.Teal};
  color: ${({ theme }) => theme.color.WhiteSmoke};
  font-size: 20px;
  width: 100%;
  transition: all 0.3s ease 0s;


  &:hover {
    background: ${({ theme }) => theme.color.PersianGreen};
    color: ${({ theme }) => theme.color.Black};
  }
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.Teal};
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.Crimson};
`;
