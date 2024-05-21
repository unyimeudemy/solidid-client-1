
import React, { useState } from 'react'
import styled from "styled-components"
import Axios from '../lib/api/axios'
import {useSelector} from "react-redux"

const Container = styled.div`
    height: 75%;
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
    height: auto;
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


export const AddMemberForm = ({handleAllMembersClicked}) => {
    const [staffName, setStaffName] = useState();
    const [staffEmail, setStaffEmail] = useState();
    const [staffRole, setStaffRole] = useState();
    const [staffID, setStaffID] = useState();

    const {currentUser} = useSelector((state) => state.user);
    console.log("currentUser: ", currentUser);
    const {
        email,
        organizationName
    } = currentUser;

    console.log("staffid: ", staffID);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await Axios.post(
                "/org/add-member",
                {
                    staffName ,
                    staffEmail,
                    staffRole,
                    staffID,
                    orgName: organizationName,
                    orgEmail: email
                }
            )
            handleAllMembersClicked();

        }catch(error){
            console.log(error);
        }
    }


  return (
    <Container>
        <Inputs>
            <Input
                type='text'
                placeholder='Staff name'
                onChange={(e) => {setStaffName(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Staff email'
                onChange={(e) => {setStaffEmail(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Staff role'
                onChange={(e) => {setStaffRole(e.target.value)}}
            />
            <Input
                type='text'
                placeholder='Staff ID'
                onChange={(e) => {setStaffID(e.target.value)}}
            />
            
        </Inputs>

        <Button
        onClick={handleSubmit}
        >Register</Button>
    </Container>
  )
}
