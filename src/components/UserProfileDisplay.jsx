import React from 'react'
import styled from 'styled-components'
import { rihanna } from '../Images/ImageUrls'
import { HistoryList } from './HistoryList'
import { AddOrgForm } from './AddOrgForm'




const Container = styled.div`
    height: 87%;
    width: 67%;
    background-color: transparent;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;
`

const Box = styled.div`
width: 100%;
height: 50px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
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

const ProfileWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    gap: 10px;

`

export const UserProfileDisplay = ({
    firstName,
    lastName,
    stateOfOrigin,
    viewHistory,
    viewAddOrg,
    viewUserProfile,
    setViewUserProfile,
    image
}) => {
  return (
    <Container>
        {viewUserProfile ? 
        <ProfileWrapper>
                <Box>
                    <DetailHeader>Profile</DetailHeader>
                </Box>
                    <ProfilePic src={image} alt='profileImage'/>
                    <Box2>
                        <Key>First name: </Key>
                        <Value>{firstName}</Value>
                    </Box2>
                    <Box2>
                        <Key>Last name: </Key>
                        <Value>{lastName}</Value>
                    </Box2>
                    <Box2>
                        <Key>State of origin: </Key>
                        <Value>{stateOfOrigin}</Value>
                    </Box2>
        </ProfileWrapper>
        :
            (viewHistory ?
                <HistoryList/>
                :
                (viewAddOrg &&
                <AddOrgForm
                    setViewUserProfile={setViewUserProfile}
                />
            )
            )
        }
    </Container>
  )
}
