import React from 'react'
import styled from 'styled-components'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from "react-router-dom";
import {  useSelector } from 'react-redux';
import {useLocation} from "react-router-dom"
import { SolidIDLogo } from './SolidIDLogo';
import { PageNotAvailable } from './PageNotAvailable';

const Container = styled.div`
    height: 70px;
    width: 100%;
    background-color: #EEEE;
    display: flex;
    justify-content: space-between;
    align-items: center;

@media only screen and (max-width: 425px) {
    /* height: 40%; */
    height: 55px;
    width: 100%;
  }

`



const Tabs = styled.div`
    width: 40%;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

const Text = styled.div`
    color: #263f40;
  font-size: 15px;
  font-weight: 600;
`
const Tab = styled.div`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
cursor: pointer;

    @media only screen and (max-width: 425px) {
        display:none;
      }
`

const ProfileButton = styled.button`

      border-radius: 10px;
  width: 120px;
  height: 40px;
  color: #426e70;
  padding: 5px 15px;
  background-color: #EEEE;
  border: 1px solid #426e70;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  :hover {
    cursor: pointer;
    background-color: #426e70;
    color: #EEEE;
  }

  @media only screen and (max-width: 425px) {
 width: 90px;
  height: 35px;
    font-size: 15px;

}
`


const SignOutButton = styled.button`
  border-radius: 10px;
  width: 120px;
  height: 40px;
  color: #426e70;
  padding: 5px 15px;
  background-color: #EEEE;
  border: 1px solid #426e70;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;


      @media only screen and (max-width: 425px) {
 width: 100px;
  height: 35px;
    font-size: 15px;

}
`

const Txt = styled.div`
width: 100%;
/* height: 100%; */
`

const SignInButton = styled.button`
    border-radius: 10px;
  width: 120px;
  height: 40px;
  color: #426e70;
  padding: 5px 15px;
  background-color: #EEEE;
  border: 2px solid #426e70;
  font-weight: 600;
  font-size: medium;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
cursor: pointer;


  :hover {
    background-color: #426e70;
    color: #EEEE;
  }

  @media only screen and (max-width: 425px) {
 width: 90px;
  height: 35px;
    font-size: 15px;

}
`

const Logo = styled.div`
color: #31363F;
font-size: 30px;
font-weight: 900;
margin-left: 20px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (min-width: 425px) {
        display:none;
      }

`

const Id = styled.span`
height: 50%;
width: 40px;
padding: 5px;
background-color: #FBA834;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
`

export const Header = () => {


const navigate = useNavigate();
const {currentUser} = useSelector((state) => state.user);

const location = useLocation();

  return (
    <Container>
        <> 
        <SolidIDLogo/>
        <Logo onClick={() => navigate("/")}>
        <Id>ID</Id>
    </Logo>  
        <Tabs>
            <Tab
                onClick={() => navigate("/services")}       
            >
            <SupportAgentIcon  htmlColor='#263f40'/> 
            <Text>Services</Text>
            </Tab>
        <Tab
            onClick={() => navigate("/services")} 
        >
        <AssessmentIcon  htmlColor='#263f40'/>
        <Text>Reports</Text>
        </Tab>
        <Tab
            onClick={() => navigate("/services")} 
        >
        <GroupsIcon  htmlColor='#263f40'/>
        <Text>Partners</Text>
        </Tab>
        {currentUser != null ? (
          location.pathname === "/profile" ? (
            <SignOutButton
            onClick={() => navigate("/log_out")}
            >Sign out</SignOutButton>
          ) : (
            <ProfileButton onClick={() => navigate(`/profile`)}>
              <PersonIcon />
              <Txt>Profile</Txt>
            </ProfileButton>
          )
        ) : (
          <SignInButton onClick={() => navigate(`/sign_in`)}>
            Sign in
          </SignInButton>
         )}
        
        </Tabs>
        </>
    </Container>
  )
}
