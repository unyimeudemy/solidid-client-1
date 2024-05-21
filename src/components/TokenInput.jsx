import React, { useState } from 'react';
import styled from "styled-components"

export const TokenInput = () => {

const [token, setToken] = useState("");
const TokenField = styled.input``

console.log(token);
// const handleInput = (e) => {
// console.log(e);
// }

  return (
    <TokenField 
    type='Email'
    onChange={(e) => setToken(e.target.value)}
    ></TokenField>
  )
}
