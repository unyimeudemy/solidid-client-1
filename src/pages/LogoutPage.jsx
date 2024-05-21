import React from 'react'
import { Header } from '../components/Header';
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import { logout } from '../redux/slices/userSlice';
import Cookies from "js-cookie";

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`

const InnerContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
`

const Wrapper = styled.div`
height: 50%;
width: 65%;
display: flex;

`

const Text = styled.div`
width: 70%;
height: 100%;
background-color: transparent;
`

const Divider = styled.div`
width: 0.3%;
height: 100%;
background-color: #76ABAE;
`

const ButtonContainer = styled.div`
width: 29.7%;
height: 100%;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.div`
color: #263f40;
font-weight: 700;
font-size: 40px;
`

const Explanation = styled.div`
    color: #31363F;
font-weight: 500;
font-size: 20px;
margin-top: 30px;
`

const RedMarker = styled.span`
color: red;
font-weight: 700;
`

const Option = styled.div`
color: green;
font-weight: 600;
font-size: 15px;
margin-top: 120px;
text-decoration: underline;
cursor: pointer;
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

export const LogoutPage = () => {


const navigate = useNavigate();

const dispatch = useDispatch();

const handleSignOut = () => {
    dispatch(logout());
    Cookies.remove("AccessToken");
    navigate("/");
}
 
  return (
    <Container>
    <Header/>
      <InnerContainer>
        <Wrapper>
            <Text>
                <Title>Are you sure you want to log out?</Title>
                <Explanation>Once you logout, you <RedMarker>won't</RedMarker> be able to keep
                     track of who or where your identity is used thus making 
                     you <RedMarker>liable</RedMarker> to identity theft.
                </Explanation>
                <Option
                onClick={() => navigate("/profile")}
                >Click here to stay signed in and help us protect your identity</Option>
            </Text>
            <Divider/>
            <ButtonContainer>
                <Button
                    onClick={handleSignOut}
                >Sign out</Button>
            </ButtonContainer>
        </Wrapper>
    </InnerContainer>
    </Container>
  )
}
