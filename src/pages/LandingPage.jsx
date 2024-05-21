import React from 'react'
import styled from 'styled-components'
import background3 from "../Images/background3.jfif";
import { Header } from '../components/Header.jsx';
import {useNavigate} from "react-router-dom";
import {  useSelector } from 'react-redux';


const Container = styled.div`
display:flex;
flex-direction: column;
align-items: center;
`

const Section1 = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-image:linear-gradient(
  to right,
  rgb(0, 0, 12),
  rgba(0, 0, 0, 0)
),
url(${background3});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Section4 = styled.div`
height: 100vh;
width: 100%;
background-color: transparent;
`

const HeadLine = styled.div`
height: 70%;
width: 100%;
color: #EEEEEE;
font-size: 60px;
font-weight: 900;
`

const Left = styled.div`
width: 60%;
height: 100%;
background-color: transparent;
margin: 30px;
`

const Button = styled.button`
  border-radius: 10px;
width: 200px;
height: 60px;
color: white;
padding: 5px 15px;
background-color: #426e70;
border: 1px solid #426e70;
font-weight: 900;
font-size: large;
cursor: pointer;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
/* box-shadow: 0px 6px 10px hsl(0, 0%, 100%); */
`

const Buttons = styled.div`
display: flex;
gap: 20px;
`
const  SigUpButton = styled.button`
  border-radius: 10px;
width: 200px;
height: 60px;
color: white;
padding: 5px 15px;
background-color: #426e70;
border: 1px solid #426e70;
font-weight: 900;
font-size: large;
cursor: pointer;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
gap: 5px;
`

export const LandingPage = () => {

const navigate = useNavigate();
const {currentUser} = useSelector((state) => state.user);
console.log("currentUser: ", currentUser);

  return (
    <Container>
        <Header/>
        <Section1>
            <Left>
            <HeadLine>Don't let any body claim your identity by joining
                a centralized identity verification platform.
            </HeadLine>
            <Buttons>

            { currentUser != null ?
                currentUser.role !== "ORG" && <Button
                 onClick={() => navigate("/verify")}
                 >Verify Identity</Button> :
                 <SigUpButton
                 onClick={() => navigate("/sign_up")}
                 >Sign up</SigUpButton> 
            }
            <Button>Learn more</Button>
            </Buttons>
            </Left>
        </Section1>
        <Section4></Section4>
    </Container>
  )
}
