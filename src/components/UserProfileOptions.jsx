import React from 'react'
import styled from "styled-components"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Buttons = styled.div`
width: 100%;
height: 250px;
background-color: transparent;
display: flex;
flex-direction: column;
display: flex;
align-items: center;
/* justify-content: center; */
margin-top: 30px;
`

const Others = styled.div`
width: 100%;
height: 40px;
background-color: transparent;
margin-bottom: 10px;
display: flex;
align-items: center;
gap: 10px;
`

const Text = styled.div`
font-size: 20px;
font-weight: 600;
color: #222831;
`

 const HistoryButton = styled.button`
    border-radius: 10px;
  color: #3f4a5a;
  padding: 5px 15px;
  border: 1px solid #3f4a5a;
  background-color: transparent;
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
  height: 50px;
  width: 150px;
`;

 const AddOrgButton = styled.button`
    border-radius: 10px;
  color: #3f4a5a;
  padding: 5px 15px;
  border: 1px solid #3f4a5a;
  background-color: transparent;
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
  height: 50px;
  width: 150px;
`;

const Row1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50px;

`
const ProfileButton = styled.div`
    border-radius: 10px;
  color: #3f4a5a;
  padding: 5px 15px;
  border: 1px solid #3f4a5a;
  background-color: transparent;
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
  height: 35px;
  width: 277px;
  margin-bottom: 10px;

`

export const UserProfileOptions = ({
    setViewUserProfile,
    setViewHistory,
    setviewAddOrg

}) => {

    const handleProfileClicked = () => {
        setViewUserProfile(true);
        setViewHistory(false);
        setviewAddOrg(false);
    }

    const handleHistoryClicked = () => {
        setViewHistory(true);
        setviewAddOrg(false);
        setViewUserProfile(false);
    }

    const handleAddOrgClicked = () => {
        setviewAddOrg(true);
        setViewHistory(false);
        setViewUserProfile(false);
    }

  return (
<Buttons>
    <ProfileButton
        onClick={handleProfileClicked}
    >
        <AccountCircleIcon/>
        <div>Profile</div>
    </ProfileButton>
    <Row1>
        <HistoryButton
            onClick={handleHistoryClicked}
        >
            <AccessTimeIcon />
            <div>History</div>
        </HistoryButton>
        <AddOrgButton
            onClick={handleAddOrgClicked}
        >
            <AddHomeWorkIcon/>
            <div>Add Org</div>
        </AddOrgButton>
    </Row1>
</Buttons>
  )
}
