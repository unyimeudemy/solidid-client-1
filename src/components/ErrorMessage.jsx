import React from 'react'
import styled from 'styled-components'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';



const Error = styled.div`
    width: 83%;
    height: 40px;
    background-color: #ffe6e6;
    border: 1px solid #ff0000;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ff0000;

`

const Message = styled.div`
    font-size: small;
    margin-left: 30px;
    font-weight: 500;
`;

export const ErrorMessage = ({errorMessage}) => {
  return (
    <Error>
    <ErrorOutlineOutlinedIcon/>
    <Message>{errorMessage}</Message>
</Error>
  )
}
