import React from "react"
import styled from "styled-components"
import { Header } from "./Header"

const Container = styled.div`
    height: 100%;
    width: 100%;
    
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80%;
    width: 100%;
    font-size: 30px;
    font-weight: 800;
    color: #426e70;

`
export const PageNotAvailable = () => {

    return (
        <Container>
            <Header/>
            <Wrapper>INFORMATION IS CURRENTLY NOT AVAILABLE</Wrapper>
        </Container>
    )
}
