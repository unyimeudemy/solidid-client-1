import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Buttons, Container, Input, Title, Wrapper } from '../Styling/signStyles';
import { useNavigate } from 'react-router-dom';
import Axios from '../lib/api/axios';
import Cookies from 'js-cookie';
import { SolidIDLogo } from '../components/SolidIDLogo';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import S3FileUpload from 'react-s3';
// import { uploadFile } from 'react-s3';
import { s3_Config } from '../configs/s3Config';

window.Buffer = window.Buffer || require("buffer").Buffer;



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

const Message = styled.div`
    font-size: small;
    margin-left: 30px;
    font-weight: 500;
`;

const InputEmail = styled.input`
  background-color: transparent;
  width: 80%;
  height: 35px;
  outline: none;
  color: #424656;
  border: 1px solid #3f4a5a;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 560;
`;

// const InValidEmail = styled.div`
//     font-size: 13px;
//     font-weight: 500;
//     color:red;

// `

export const SignupPage = () => {
    const [slide, setSlide] = useState(1);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [otherName, setOtherName] = useState();
    const [age, setAge] = useState();
    const [nationality, setNationality] = useState();
    const [stateOfOrigin, setStateOfOrigin] = useState();
    const [savedImage, setSavedImage] = useState();
    const navigate = useNavigate(); 


    const upload = (e) => {
        console.log(e[0]);

        S3FileUpload.uploadFile(e[0], s3_Config)
        .then(data => {
            console.log("data: ", data);
            setSavedImage(data);
        })
        .catch(err => console.error("err: ", err))
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleNext = () => {
        if(isValidEmail(email)){
            if(slide <= 3){setSlide(i => i + 1);}
        }
    }
    const handleBack = () => {
        if(slide <= 3){setSlide(i => i - 1);}
    }

    const handleSummit = async () => {
        try{
            console.log("saved image: ", savedImage.location);
            if(password === passwordConfirm){
            const res = await Axios.post(
                "/user/auth/signup",
                {
                    email,
                    password,
                    firstName,
                    lastName,
                    otherName,
                    nationality,
                    age,
                    stateOfOrigin,
                    image: savedImage.location
                }
            )
            const AccessToken = res.data.token;
            Cookies.set("AccessToken", AccessToken, {expires: 7 * 4 * 3});
            navigate("/");
            }
        }catch(error){
            console.log("Error 💥💥",error.message);
        }
    }


  return (
    <Wrapper>
        <Container>
            <SolidIDLogo/>
            <Title>Sign up</Title>
            <Notification>
                    <InfoOutlinedIcon/>
                    <Message>You are about to sign up as a user NOT organization</Message>
                </Notification>
            { slide === 1 && <>
            <>
            <InputEmail
            type='email'
            placeholder='Email'
            onChange={(e) => {setEmail(e.target.value)}}
            />
            </>
            <Input
                type='password'
                placeholder='Password'
                onChange={(e) => {setPassword(e.target.value)}}
            />
            <Input
            type='password'
            placeholder='Password confirm'
            onChange={(e) => {setPasswordConfirm(e.target.value)}}
            />
            <Input
                type="file"
                onChange={(e) => {upload(e.target.files)}}
            />
            </>}
            { slide === 2 && <>
            <Input
            type='text'
            placeholder='First name'
            onChange={(e) => {setFirstName(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Last name'
                onChange={(e) => {setLastName(e.target.value)}}
            />
            <Input
            type='text'
            placeholder='Other names'
            onChange={(e) => {setOtherName(e.target.value)}}

            />
            </>}
            { slide === 3 && <>
            <Input
            type='text'
            placeholder='Age'
            onChange={(e) => {setAge(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Nationality'
                onChange={(e) => {setNationality(e.target.value)}}
            />
            <Input
            type='text'
            placeholder='State of Origin'
            onChange={(e) => {setStateOfOrigin(e.target.value)}}
            />
            </>}

            {slide === 1 && <Buttons>
                <Button
                onClick={() => {navigate("/sign_in")}}
                >
                    Sign in 
                </Button>
                <Button
                onClick={() => {handleNext()}}
                >
                    Next 
                </Button>
            </Buttons>} 
            { slide === 2 &&
            <Buttons>
            <Button
            onClick={() => {handleBack()}}
            >
                Back 
            </Button>
            <Button 
            onClick={() => {handleNext()}}
            >
                Next 
            </Button>
        </Buttons>
            }{ slide === 3 &&
                <Buttons>
                <Button
                onClick={() => {handleBack()}}
                >
                    Back 
                </Button>
                <Button
                onClick={handleSummit}
                >
                    Summit 
                </Button>
            </Buttons>
            }
        </Container>
        <OrgSigUpLink
        onClick={() => navigate("/org_sign_up")}
        >
            <InfoIcon/>
            <div>Click here to sign up as an organization</div>
        </OrgSigUpLink>
    </Wrapper>
  )
}
