import React, { useState } from 'react'
import styled from "styled-components";
import { SolidIDLogo } from '../components/SolidIDLogo';
import Axios from '../lib/api/axios';
import Cookies from "js-cookie"
import {useNavigate} from "react-router-dom"
import { getUserProfile } from '../lib/getUserProfile';
import {useSelector, useDispatch} from "react-redux"
import { loginSuccess } from '../redux/slices/userSlice';
import { getOrgProfile } from '../lib/getOrgProfile';

import InfoIcon from '@mui/icons-material/Info';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { ErrorMessage } from '../components/ErrorMessage';


const OrgSigUpLink = styled.div`
color: #31363F;
display: flex;
font-weight: 600;
text-decoration: underline;
margin-top: 20px;
cursor: pointer;
`

const Notification = styled.div`
    width: 420px;
    height: 40px;
    background-color: #e6e6ff;
    border: 1px solid #0000ff;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0000ff;

`

const Message = styled.div`
    font-size: small;
    margin-left: 30px;
    font-weight: 500;
`;

 const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 90px;
/* margin-top: 50px; */
height: auto;
background-color: #EEEEEE;
`

 const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 500px;
    align-items: center;
    justify-content: center;
    
`


 const Input = styled.input`
  background-color: transparent;
  width: 80%;
  height: 40px;
  outline: none;
  color: #424656;
  border: 1px solid #3f4a5a;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 20px;
`;

 const Title = styled.div`
    color: #76ABAE;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
`

 const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 150px;
    width: 80%;
    height: 35px;
`

 const Button = styled.button`
    border-radius: 10px;
  color: white;
  padding: 5px 15px;
  border: 1px solid #3f4a5a;
  background-color: #3f4a5a;
  /* border: none; */
  font-weight: 500;
  font-size: medium;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-weight: 700;
  height: 60px;
  width: 100%;

  margin-bottom: 20px;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;


export const OrgSignInPage = () => {
    const [orgEmail, setOrgEmail] = useState("")
    const [orgPassword, setOrgPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("");


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignUp = async (e) => {
        e.preventDefault();

        try{
            const res = await Axios.post(
                "/org/auth/signin",
                {
                    email: orgEmail,
                    password: orgPassword
                }
            )

            if(res.data.token !== "Email or password not correct"){
                setErrorMessage("");
                const AccessToken = res.data.token;
                Cookies.set("AccessToken", AccessToken, {expires: 7 * 4 * 3});
                const userDetail = await getOrgProfile(AccessToken);
                dispatch(loginSuccess(userDetail.data));
                navigate("/");
            }
            setErrorMessage(res.data.token);

        }catch(error){
            console.log(error);
        }
    }



  return (
    <Wrapper>
    <Container>
        <Top>
        <SolidIDLogo/>
        <Title>Sign in as an organization</Title>
        {errorMessage.length === 0?
        <Notification>
            <InfoOutlinedIcon/>
            <Message>You are about to sign in as an organization NOT user</Message>
        </Notification>:
        <ErrorMessage
            errorMessage={errorMessage}
        />

        }
        </Top>
        <>
        <Input
        type='text'
        placeholder='Organization email'
        onChange={(e) => setOrgEmail(e.target.value)}
        />
        <Input
            type='password'
            placeholder='Organization password'
        onChange={(e) => setOrgPassword(e.target.value)}
        />
        </>
        <Buttons>
            <Button
            onClick={handleSignUp}
            >
                <div>Sign in </div>
            </Button>
        </Buttons>
    </Container>
    <OrgSigUpLink
            onClick={() => navigate("/sign_in")}
        >
            <InfoIcon/>
            <div>Click here to sign in as a user</div>
        </OrgSigUpLink>
</Wrapper>
  )
}
