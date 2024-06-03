import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header'
import { rihanna } from '../Images/ImageUrls'
import microsoft  from '../Images/Microsoft.png'
import { AccountList } from '../components/AccountList.jsx';
import {useSelector, useDispatch} from "react-redux"
import { removeOrg } from '../redux/slices/orgChoosenSlice.js';
import Axios from '../lib/api/axios.js';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleIcon from '@mui/icons-material/People';
import { AddMemberForm } from '../components/AddMemberForm.jsx'
import { UserProfileOptions } from '../components/UserProfileOptions.jsx'
import { UserProfileDisplay } from '../components/UserProfileDisplay.jsx'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    gap: 5px;
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
        height: 100%;
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
    border-radius: 0px;
    padding: 0px;
    gap:5px;

}
`

const Left = styled.div`
    height: 80%;
    width: 33%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;

    @media only screen and (max-width: 425px) {
        height: 40%;
        width: 95%;
        border-radius: 15px;
        border-radius: 0px;
        padding: 10px;
        background-color: #EEEE;
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
        display: none;
    }
`

const Input = styled.div`
    height: 40px;
    width: 300px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 425px) {
        height: 30px;
    width: 200px;
    }
`

const Button = styled.button`
    background-color: #395e60;
    border: 1px solid #395e60;
    height: 47px;
    color: white;
    font-size: 20px;
  width: 120px;
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
    height: 37px;
    font-size: 15px;
    width: 90px;
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
    border: 1px solid ;
    background-color: #EEEEEE;
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
    width: 50px;
height: 50px;
}
`

const Key = styled.div`
    font-size: 20px;
    font-weight: 900;

    @media only screen and (max-width: 425px) {
        font-size: 15px;
    }
`
const Value = styled.div`
    font-size: 20px;
    font-weight: 700;

    @media only screen and (max-width: 425px) {
        font-size: 15px;
    }
`


const Field = styled.div`
height: 45px;
background-color: #EEEEEE;
border: none;
font-size: 20px;
width: 200px;
font-weight: 400;
  cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
color: #395e60;

@media only screen and (max-width: 425px) {
    height: 37px;
    font-size: 15px;
    width: 120px;
    background-color: white;
    }

`;

const Token = styled.div`
height: 45px;
background-color: #EEEEEE;
border: none;
font-size: 20px;
width: 200px;
font-weight: 400;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
color: #395e60;
`

const List = styled.div`
    display: flex;
    align-items: center;
    gap:10px;
    height: 100%;
    width: 100%;
    flex-direction: column;

       @media only screen and (max-width: 425px) {
        height: 90%;
    width: 90%;
    }
`
const Option = styled.div`
width: 100%;
height: 40px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
padding: 5px;
border: 1px solid ;
cursor: pointer;

   @media only screen and (max-width: 425px) {
       height: 25px;
       padding: 10px;
       background-color: white;
    }
`

const   Des = styled.div`
width: 80%;
margin-left: 20px;
font-size: 20px;
font-weight: 500;
`

const MemberList = styled.div`
    width: 100%;
    height: 75%;
    background-color: transparent;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;

       @media only screen and (max-width: 425px) {
        padding-left: 10px;
        padding-right: 10px;
    }
`

const Member = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
`

const Hr = styled.hr`
    color: #222831;
    width: 100%;
`

const MemberWrapper = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #EEEEEE;
    }

    @media only screen and (max-width: 425px) {
        height: 35px;
    }`

const ProfileImage = styled.img`
    border-radius: 100%;
    height: 40px;
    width: 40px;
    background-color: gray;

    @media only screen and (max-width: 425px) {
    height: 25px;
    width: 25px;
    }
`

const NameAndRole = styled.div`
    height: 100%;
    width: 90%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media only screen and (max-width: 425px) {
        justify-content: space-between;
    }
`

const OrgProfileDetail = styled.div`
    padding: 5px;
`

const FirstAndLastNames = styled.div`   
    margin-left: 10px;
    
`
const Role = styled.div`
    
`
export const ProfilePage = () => {


const [organizationList, setOrganizationList] = useState(false);
const [displayToken, setDisplayToken] = useState(true);
const [currentUserProfile, setCurrentUserProfile] = useState({});
const [viewProfile, setViewProfile] = useState(true);
const [viewAllMembers, setViewAllMembers] = useState(false);
const [viewAddMember, setViewAddMember] = useState(false);
const [allMembers, setAllMembers] = useState([]);
const [viewHistory, setViewHistory] = useState(false);
const [viewAddOrg, setviewAddOrg] = useState(false);
const [viewUserProfile, setViewUserProfile] = useState(true);
 
const dispatch = useDispatch();


const addedOrg  = useSelector((state) => state.orgChoosen);

const handleGenerate = () => {
    setDisplayToken(!displayToken);
    dispatch(removeOrg());
}

const {currentUser} = useSelector((state) => state.user);
useEffect(() => {
    setCurrentUserProfile(currentUser);
}, [])



const {firstName, lastName, stateOfOrigin, role, organizationName, image, logo} = currentUserProfile;

const handleProfileClicked = () => {
    setViewProfile(true);
    setViewAddMember(false);
    setViewAllMembers(false);
}
const handleAddMemberClicked = () => {
    setViewAddMember(true);
    setViewProfile(false);
    setViewAllMembers(false);
}
const handleAllMembersClicked = async () => {
    setViewAllMembers(true);
    setViewProfile(false);
    setViewAddMember(false);

    try{
        const res = await Axios.get("/org/all-members");
        setAllMembers(res.data);

    }catch(error){
        console.log(error);
    }
}


    return (
        <Container>
            <Header/>
            <Wrapper>
                {role !== "ORG" ? 
                <UserProfileDisplay
                    firstName={firstName}
                    lastName={lastName}
                    stateOfOrigin={stateOfOrigin}
                    viewHistory={viewHistory}
                    viewAddOrg={viewAddOrg}
                    viewUserProfile={viewUserProfile}
                    image={image}
                    setViewUserProfile={setViewUserProfile}
                />
                :(
                    viewProfile ?
                <Right>
                    <Box>
                        <DetailHeader>Profile</DetailHeader>
                    </Box>
                    <OrgProfileDetail>
                    <ProfilePic src={logo} alt='msft'/>
                    <Box2>
                        <Key>Organization : </Key>
                        <Value>{organizationName}</Value>
                    </Box2>
                    </OrgProfileDetail>
                </Right>
                    :(
                        viewAllMembers ?
                    <Right>
                        <Box>
                            <DetailHeader>All members</DetailHeader>
                        </Box>
                        <MemberList>
                            {allMembers.map((member) => (
                            <MemberWrapper key={member.id}>
                                <Hr/>
                                <Member>
                                    <ProfileImage/>
                                    <NameAndRole>
                                        <FirstAndLastNames>{member.staffName}</FirstAndLastNames>
                                        <Role>{member.staffRole}</Role>
                                    </NameAndRole>
                                </Member>
                            </MemberWrapper>
                            ))}
                            <Hr/>
                        </MemberList>
                    </Right>
                        :( viewAddMember &&
                            <Right>
                            <Box>
                                <DetailHeader>Add a member</DetailHeader>
                            </Box>
                            <AddMemberForm
                                handleAllMembersClicked={handleAllMembersClicked}
                            />
                        
                        </Right>
                        )
                    )
                )
                }
                <hr></hr>
                {role !== "ORG" ? <Left>
                    <Title>Generate token</Title>
                    <Input>
                        {displayToken ? 
                        <Field
                        onClick={() => {setOrganizationList(!organizationList)}}
                        >Choose profile</Field>:
                    <Token>{addedOrg.org != null ? addedOrg.org : "Click generate"}</Token>
                    }
                        { organizationList && <AccountList 
                        organizationList = {organizationList}
                        setOrganizationList = {setOrganizationList}
                        displayToken={displayToken}
                        setDisplayToken={setDisplayToken}
                        />}
                        <Button
                        onClick={() => handleGenerate()}
                        >Generate</Button>
                    </Input>
                    <UserProfileOptions
                        setViewUserProfile={setViewUserProfile}
                        setViewHistory={setViewHistory}
                        setviewAddOrg={setviewAddOrg}
                    />
                </Left>:
                <Left>
                    <Title>Tabs</Title>
                    <List>
                        <Option
                        onClick={handleProfileClicked}
                        >
                            <AccountCircleIcon/>
                            <Des>Profile</Des>
                        </Option>
                        <Option
                        onClick={handleAllMembersClicked}
                        >
                            <PeopleIcon/>
                            <Des>All members</Des>
                        </Option>
                        <Option
                        onClick={handleAddMemberClicked}
                        >
                            <PersonAddIcon/>
                            <Des>Add member</Des>
                        </Option>
                    </List>
                </Left>
                }
            </Wrapper>
        </Container>
        
      )
}
