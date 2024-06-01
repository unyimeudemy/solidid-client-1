import React from 'react'
import styled from "styled-components"
import {useNavigate} from "react-router-dom"



const Logo = styled.div`
color: #31363F;
font-size: 50px;
font-weight: 900;
margin-left: 60px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 425px) {
        display: none;
    }

`

const Id = styled.span`
height: 70%;
width: 65px;
padding: 5px;
background-color: #FBA834;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`


export const SolidIDLogoMin = () => {

const navigate = useNavigate();

  return (
    <Logo onClick={() => navigate("/")}>
        <Id>ID</Id>
    </Logo>  
)
}
