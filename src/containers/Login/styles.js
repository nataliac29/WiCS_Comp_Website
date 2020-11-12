import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
    padding: 30px 30px 30px 30px; 
    font-size: 1.2rem; 
    color: #c93826;
    text-decoration: none;
`


export const SignupButton = styled.button`
    padding: 15px 40px 15px 40px; 
    border-radius: 5px; 
    border: none; 
    font-weight: bold; 
    font-size: 1.1rem; 
    color: white;
    background-color: #c93826; 
    /*border: 2px solid white;*/
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
    margin-bottom: 5vh;
    margin-top: 1vh;

`
export const ErrorText = styled.p`
  font-size: .8rem;
  line-height: 1rem;
  color: red;
  width: 300px;
  display: block;
`
