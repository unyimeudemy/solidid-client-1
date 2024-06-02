import React, { useRef } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { rihanna } from '../Images/ImageUrls'
import { useState } from 'react'
import Axios from '../lib/api/axios'
import { TokenInput } from '../components/TokenInput'
import  profile_picture  from '../Images/profile_picture.png'



const Container = styled.div`
width: 100%;
height: 100%;
background-color: transparent;
display: flex;
align-items: center;
/* justify-content: center; */
flex-direction: column;

@media only screen and (max-width: 425px) {
   /* background-color: red; */
}

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 75%;
    height: 80%;
    border-radius: 15px;

    @media only screen and (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    border-radius: 0px;
    height: 50%;
}
`

const Right = styled.div`
    height: 100%;
    width: 67%;
    background-color: transparent;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px;

    @media only screen and (max-width: 425px) {
    width: 100%;
    padding: 10px;
}
`

const Left = styled.div`
    height: 100%;
    width: 33%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    @media only screen and (max-width: 425px) {
    /* background-color: green; */
    width: 80%;
    border-radius: 0%;
}
`

const Field = styled.input`
    height: 45px;
    background-color: #EEEEEE;
    border: none;
    font-size: 20px;
    width: 200px;
    font-weight: 400;
    padding-left: 10px;

    @media only screen and (max-width: 425px) {
    font-size: 13px;
    height: 30px;
    width: 120px;
    padding-left: 5px;
    background-color: white;
}
`

const Title = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: #31363F;
    margin-bottom: 40px;

    @media only screen and (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 10px;
}
`

const Input = styled.div`
    /* height: 40px; */
/* width: 300px; */
/* border-radius: 15px; */
display: flex;
`

const Button = styled.button`
background-color: #395e60;
border: 1px solid #395e60;
height: 47px;
color: white;
font-size: 20px;
  width: 100px;
  color: white;
  padding: 5px 15px;
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
    height: 33px;
    width: 60px;
}
`

const Box = styled.div`
width: 100%;
height: 50px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 425px) {
    height: 30px;
    width: 95%;
}
`
const Box2 = styled.div`
width: 100%;
height: 30px;
background-color: transparent;
display: flex;
align-items: center;
gap: 10px;
/* justify-content: center; */

@media only screen and (max-width: 425px) {
    height: 15px;
    gap: 5px;
}
`

const DetailHeader = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: #31363F;

    @media only screen and (max-width: 425px) {
        font-size: 20px;
    
}
`

const ProfilePic = styled.img`
width: 200px;
height: 200px;
border-radius: 10px;

@media only screen and (max-width: 425px) {
    width: 80px;
    height: 80px;
    border-radius: 5px;
}
`

const Key = styled.div`
    font-size: 20px;
    font-weight: 900;

    @media only screen and (max-width: 425px) {
    font-size: 13px;
}
`
const Value = styled.div`
    font-size: 20px;
    font-weight: 700;

    @media only screen and (max-width: 425px) {
    font-size: 13px;
}
`



export const VerificationPage = () => {

const [verificationToken, setVerificationToken] = useState("");

const [verifiedUser, setVerifiedUser] = useState(null);


const handleVerify = async (e) => {
e.preventDefault();
    try{
    const res = await Axios.post(
        "/identity/verify",
        {
            key: verificationToken
        }
    )
        setVerifiedUser(res.data);
    }catch(error){
        console.log(error.message);
    }
}

  return (
    
    <Container>
        <Header/>
        <Wrapper>
            { 
                !verifiedUser?.staffId
                ?
                (
                <Right>
                <Box>
                    <DetailHeader>Details</DetailHeader>
                </Box>
                { 
                verifiedUser?.image !== undefined ?
                <ProfilePic src={verifiedUser?.image} alt='Profile Image'/>
                :
                <ProfilePic src={profile_picture} alt='Profile picture'/>
                
                }

                <Box2>
                    <Key>First Name: </Key>
                    <Value>{verifiedUser?.firstName}</Value>
                </Box2>
                <Box2>
                    <Key>Last Name: </Key>
                    <Value>{verifiedUser?.lastName}</Value>
                </Box2>
                <Box2>
                    <Key>Nationality: </Key>
                    <Value>{verifiedUser?.stateOfOrigin}</Value>
                </Box2>
                <Box2>
                    <Key>Email: </Key>
                    <Value>{verifiedUser?.email}</Value>
                </Box2>
            </Right>
        )
            :
        ( 
            <Right>
                <Box>
                    <DetailHeader>Details</DetailHeader>
                </Box>
                { 
                verifiedUser?.image !== undefined ?
                <ProfilePic src={verifiedUser?.image} alt='profile image'/>
                :
                <ProfilePic src={profile_picture} alt='Profile picture'/>
                
                }

                <Box2>
                    <Key>Organization: </Key>
                    <Value>{verifiedUser?.orgName}</Value>
                </Box2>
                <Box2>
                    <Key>Name: </Key>
                    <Value>{verifiedUser?.firstName}</Value>
                </Box2>
                <Box2>
                    <Key>Role: </Key>
                    <Value>{verifiedUser?.staffRole}</Value>
                </Box2>
                <Box2>
                    <Key>Staff ID: </Key>
                    <Value>{verifiedUser?.staffId}</Value>
                </Box2>
            </Right>
        )
            }
            <hr></hr>
            <Left>
                <Title>Verify an identity</Title>
                <Input>
                <Field
                type='text'
                placeholder='Input a token'
                onChange={(e) => setVerificationToken(e.target.value)}
                />
                <Button
                onClick={handleVerify}
                >Verify</Button>
                </Input>
            </Left>
        </Wrapper>
    </Container>
  )
}


