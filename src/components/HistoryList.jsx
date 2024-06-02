
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Axios from '../lib/api/axios'
import DateTimeDisplay from './DateTimeDisplay'




//////////////////////////////////////////////////////////////////////////////////////


const Member = styled.div`
    width: 100%;
    height: 100%;
    background-color: transparent;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
`



const MemberWrapper = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover{
        background-color: #EEEEEE;
    }

    @media only screen and (max-width: 425px) {
        height: 35px;
        margin-bottom: 10px;
    }
`

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
        justify-content: flex-start;  
        justify-content: space-between;
    }
`

const FirstAndLastNames = styled.div`
    font-weight: 600;
    color: #222831;

    @media only screen and (max-width: 425px) {
        font-size: 15px;
        margin-left: 5px;
    }


`
const Role = styled.div`
    
`
const Container = styled.div`
    /* height: 100%;
    width: 100%;
    background-color: transparent;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    gap: 10px; */

        width: 100%;
    height: 100%;
    background-color: transparent;
    gap: 10px;
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

const ListBody = styled.div`
    width: 100%;
    height: 400px;
    background-color: transparent;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;

    @media only screen and (max-width: 425px) {
        height: 220px;
    }
`

const Hr = styled.hr`
    color: #222831;
    width: 100%;
`

export const HistoryList = () => {
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        try{

            const fetchHistoryList = async () => {
                const res = await Axios.get("/user/history");
                setHistories(res.data);
                console.log("res: ", res.data[1].date);
            }
            fetchHistoryList();
        }catch(error){
            console.log(error);
        }
      
    }, [])
    


  return (
    <Container>
    <Box>
        <DetailHeader>History</DetailHeader>
    </Box>
    <ListBody>
        {histories.map((history) => (
        <MemberWrapper key={history.id}>
            <Hr/>
            <Member>
                 <ProfileImage/>
                 <NameAndRole>
                     <FirstAndLastNames>{history.currentUserEmail}</FirstAndLastNames>
                    <DateTimeDisplay dateTimeString={history.date}/>  

                 </NameAndRole>
             </Member>
        </MemberWrapper>
        ))} 
        <Hr/>
    </ListBody>
</Container>
  )
}
