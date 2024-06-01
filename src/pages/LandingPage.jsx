import React from 'react'
import styled from 'styled-components'
import background3 from "../Images/background3.jfif";
import { Header } from '../components/Header.jsx';
import {useNavigate} from "react-router-dom";
import {  useSelector } from 'react-redux';
import { SolidIDLogoMin } from '../components/SolidIDLogoMin.jsx';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';



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

@media only screen and (max-width: 425px) {
    font-size: 30px;
}
`

const Left = styled.div`
width: 60%;
height: 100%;
background-color: transparent;
margin: 30px;

@media only screen and (max-width: 425px) {
    width: 100%;
    }
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

@media only screen and (max-width: 425px) {
    font-size: 13px;
    width: 120px;
    height: 50px;
}
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

const Quote = styled.div`
height: 40%;
background-color: transparent;
display: flex;
flex-direction: column;
padding: 30px;


@media only screen and (max-width: 425px) {
    height: 15%;
    }
`



const QuoteTitle = styled.div`  
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 60px;
    color: #263f40;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 425px) {
        font-size: 30px;
}
`

const QuoteBody = styled.div`
   font-size: 30px;
    color: #263f40;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    @media only screen and (max-width: 425px) {
        display: none;
    }
  

`

const QuoteBodySmallScreen = styled.div`
   font-size: 30px;
    color: #263f40;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    @media only screen and (max-width: 425px) {
        font-size: 15px;
        text-align: center;
        white-space: pre-wrap;
        display: inline-block;

  ::before {
    content: '\A';
    white-space: pre;
    display: block;
  }


}

@media only screen and (min-width: 425px) {
        display: none;
    }
`

const AmountSpan = styled.span`
    color: red;
    padding: 15px;
    font-weight: 800;
`

const Footer = styled.div`
height: 60%;
background-color: #eff5f5;
display: flex;
padding: 30px;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 425px) {
        flex-direction: column;
        height: 85%;
    }

`

const SectionOne = styled.div`
    height: 100%;
    width: 40%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    /* padding: 20px; */

    @media only screen and (max-width: 425px) {
        width: 100%;
    }
`

const SectionTwo = styled.div`
      height: 100%;
    width: 30%;
    background-color: transparent;

    @media only screen and (max-width: 425px) {
        width: 100%;
    }
`

const SectionThree = styled.div`
      height: 100%;
    width: 30%;
    background-color: transparent;

    @media only screen and (max-width: 425px) {
        width: 100%;
    }
`

const Socials = styled.div`
    width: 100%;
    height: 80px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media only screen and (max-width: 425px) {
        gap: 20px;
    }
`

const LogoWrapper = styled.div`
    width: 100%;
    background-color: transparent;
    display: flex;
    padding-left: 150px;
    
    @media only screen and (max-width: 425px) {
        align-items: center;
        justify-content: center;
        width: 15%;


    }
`

const FooterTitle = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;

    @media only screen and (max-width: 425px) {
        font-size: 20px;
        margin-bottom: 10px;

    }
`

const FooterLink = styled.div`
 font-size: 20px;
    font-weight: 400;
    margin-bottom: 10px;

    
    @media only screen and (max-width: 425px) {
        font-size: 15px;
        margin-bottom: 5px;

    }
    `



export const LandingPage = () => {

const navigate = useNavigate();
const {currentUser} = useSelector((state) => state.user);

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
        <Section4>
            <Quote>
             <QuoteTitle>Did you know?</QuoteTitle>
             <QuoteBody>"Over <AmountSpan>$29</AmountSpan>billion was stolen by identity thieves in 2022"</QuoteBody>
             <QuoteBodySmallScreen>"Over $29 billion was stolen by identity thieves in 2022"</QuoteBodySmallScreen>
            </Quote>
            <Footer>
                <SectionOne>
                    <LogoWrapper>
                        <SolidIDLogoMin/>
                    </LogoWrapper>
                    <Socials>
                        <div>Follow us</div>
                        <XIcon/>
                        <FacebookIcon/>
                        <LinkedInIcon/>
                        <InstagramIcon/>
                    </Socials>
                </SectionOne>
                <SectionTwo>
                    <FooterTitle>Company</FooterTitle>
                    <FooterLink> - Careers</FooterLink>
                    <FooterLink> - Blogs</FooterLink>
                    <FooterLink> - Investors</FooterLink>
                    <FooterLink> - Privacy</FooterLink>
                    <FooterLink> - Terms</FooterLink>
                    
                </SectionTwo>
                <SectionThree>
                    <FooterTitle>Help</FooterTitle>
                    <FooterLink> - Contact</FooterLink>
                    <FooterLink> - Help</FooterLink>
                    <FooterLink> - Legal information</FooterLink>
                    <FooterLink> - Review</FooterLink>
                    <FooterLink> - Agreement</FooterLink>
                </SectionThree>
            </Footer>
        </Section4>
    </Container>
  )
}
