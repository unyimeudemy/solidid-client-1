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

`

const LogoInner = styled.div`
display: flex;
gap: 5px;
height: 50px;
width: 220px;
align-items: center;
justify-content: center;
background-color: transparent;
`
const Id = styled.span`
height: 100%;
width: 65px;
padding: 5px;
background-color: #FBA834;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`
const Solid = styled.span`
/* background-color: transparent ; */
`

export const SolidIDLogo = () => {

const navigate = useNavigate();

  return (
    <Logo onClick={() => navigate("/")}>
    <LogoInner>
        <Solid>SOLID</Solid> <Id>ID</Id>
    </LogoInner>
</Logo>  )
}
