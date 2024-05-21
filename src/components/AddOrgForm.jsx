
import React, { useState } from 'react'
import styled from "styled-components"
import Axios from '../lib/api/axios'
import {useSelector} from "react-redux"

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
`

const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 10px;

`

const Input = styled.input`
    width: 90%;
    height: 35px;
    font-size: 20px;
    font-weight: 500;
    color: #222831;
`

export const Button = styled.button`
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
  width: 93%;

`;

const Box = styled.div`
width: 100%;
height: 50px;
background-color: #EEEEEE;
display: flex;
align-items: center;
justify-content: center;
`

const DetailHeader = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: #31363F;
`


export const AddOrgForm = ({setViewUserProfile}) => {
    const [orgName, setOrgName] = useState();
    const [orgEmail, setOrgEmail] = useState();
    const [staffRole, setStaffRole] = useState();
    const [staffId, setStaffId] = useState();


    const {currentUser} = useSelector((state) => state.user);
    const {
        firstName,
        lastName,
        email
    } = currentUser;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await Axios.post(
                "/user/add-org",
                {
                    staffName: firstName + lastName ,
                    staffEmail: email,
                    staffRole,
                    staffId,
                    orgName,
                    orgEmail
                }
            )
            setViewUserProfile(true);


        }catch(error){
            console.log(error);
        }
    }


  return (
    <Container>
        <Box>
            <DetailHeader>Add Organization</DetailHeader>
        </Box>
        <Inputs>
            <Input
                type='text'
                placeholder='Organization name'
                onChange={(e) => {setOrgName(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Organization email'
                onChange={(e) => {setOrgEmail(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Staff role'
                onChange={(e) => {setStaffRole(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Staff ID'
                onChange={(e) => {setStaffId(e.target.value)}}
            />
            
        </Inputs>
        <Button
            onClick={handleSubmit}
        >Add Organization</Button>
    </Container>
  )
}
