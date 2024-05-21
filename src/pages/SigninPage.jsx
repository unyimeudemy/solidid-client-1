import React, { useState } from 'react'
import { Button, Buttons, Container, Input, Logo, Title, Wrapper } from '../Styling/signStyles'
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import Axios from '../lib/api/axios';
import {  useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from "../redux/slices/userSlice.js";
import { getUserProfile } from '../lib/getUserProfile.js';
import { SolidIDLogo } from '../components/SolidIDLogo.jsx';
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { ErrorMessage } from '../components/ErrorMessage.jsx';



const OrgSigUpLink = styled.div`
color: #31363F;
display: flex;
font-weight: 600;
text-decoration: underline;
margin-top: 20px;
cursor: pointer;
`

const Notification = styled.div`
    width: 83%;
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

export const SigninPage = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    // dispatch(loginSuccess("login successful"));
    // const  {currentUser}  = useSelector((state) => state.user);
    // console.log(currentUser);

    const handleSignin = async () => {
    try{
        const res = await Axios.post(
            "/user/auth/signin",
            {
                email,
                password
            }
        )
        
        if(res.data.token !== "Email or password not correct"){
            setErrorMessage("");
            const AccessToken = res.data.token;
            Cookies.set("AccessToken", AccessToken, {expires: 7 * 4 * 3});
            const userDetail = await getUserProfile();
            dispatch(loginSuccess(userDetail.data));
            navigate("/");
        }
        setErrorMessage(res.data.token);
    }catch(error){
        console.log(error.message);
        dispatch(loginFailure());
    }
    }


    

    return (
        <Wrapper>
            <Container>
                <SolidIDLogo/>
                <Title>Sign in</Title>
                <>
                {errorMessage.length === 0 ?
                <Notification>
                    <InfoOutlinedIcon/>
                    <Message>You are about to sign in as a user NOT organization</Message>
                </Notification> :
                <ErrorMessage
                    errorMessage={errorMessage}
                />
                }
                <Input
                type='text'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                </>
                <Buttons>
                    <Button
                    onClick={handleSignin}
                    >
                        <div>Sign in </div>
                    </Button>
                </Buttons>
            </Container>
        <OrgSigUpLink
            onClick={() => navigate("/org_sign_in")}
        >
            <InfoIcon/>
            <div>Click here to sign in as an organization</div>
        </OrgSigUpLink>
        </Wrapper>
      )
}
