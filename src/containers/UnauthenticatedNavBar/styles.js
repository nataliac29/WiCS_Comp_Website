import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    height: 15vh;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing:2px;
    line-height: 1em;
    padding-left: 5vw;
    padding-right: 5vw;
    justify-content: space-between;
    margin-top: 2vh;

`
export const NavLinks = styled.div`
    display: flex;
    padding-top: 1vh;
    padding-bottom: 5vh;
    flex-direction: column;
    justify-content: space-between;
`
export const NavBLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-decoration: none;
    color: black;
    cursor: pointer;
    
`
