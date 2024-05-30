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
justify-content: center;
flex-direction: column;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    width: 75%;
    height: 80%;
    border-radius: 15px;
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
`

const Left = styled.div`
    height: 100%;
    width: 33%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

const Field = styled.input`
    height: 45px;
    background-color: #EEEEEE;
    border: none;
    font-size: 20px;
    width: 200px;
    font-weight: 400;
    padding-left: 10px;
`

const Title = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: #31363F;
    margin-bottom: 40px;
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
/* font-weight: 700; */


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
`

const Box = styled.div`
width: 100%;
height: 50px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
`
const Box2 = styled.div`
width: 100%;
height: 30px;
background-color: transparent;
display: flex;
align-items: center;
gap: 10px;
/* justify-content: center; */
`

const DetailHeader = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: #31363F;
`

const ProfilePic = styled.img`
width: 200px;
height: 200px;
border-radius: 10px;
`

const Key = styled.div`
    font-size: 20px;
    font-weight: 900;
`
const Value = styled.div`
    font-size: 20px;
    font-weight: 700;
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


// {
//     email: null,
//     firstName: 'unyime1unyime1',
//     lastName: null,
//     otherName: null,
//     nationality: null,
//     stateOfOrigin: null,
//     image: null,
//     staffId: 'PRX-12345',
//     orgName: 'org2',
//     staffRole: 'Software Engineer'
//   }

// REACT_APP_API_BASE_URL

// {
//     email: 'unyime1@gmail.com',
//     firstName: 'unyime1',
//     lastName: 'unyime1',
//     otherName: 'unyime1',
//     nationality: 'NGN',
//     stateOfOrigin: 'AKS',
//     image: 'https://solididbucket.s3.amazonaws.com/photos/google ads.GIF',
//     staffId: null,
//     orgName: null,
//     staffRole: null
//   }