import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Link = styled(NavLink)`
    padding: 30px 30px 30px 30px; 
    font-size: 1.2rem; 
    color: #c93826;
    text-decoration: none;
`
export const Container = styled.div`
    min-height: 100%;
    margin-top: 10%;
    display: flex;
    color: #c93826;
    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100vw;
        align-items: stretch;

    }
`

export const PictureContainer = styled.div`   
    display: flex; 
    flex: 1;
    flex-direction: column; 
    align-items: stretch; 
    justify-content: center;
    padding-left: 2%;
    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100vw;
        align-items: center; 
        text-align: center;
    }

`
export const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center; 
    justify-content: center;
`
export const InnerLogin = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: stretch;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 50px; 
    border-radius: 5px; 
`
export const Title = styled.p`
    line-height: 1em;
    font-size: ${props => props.font_size};
    font-weight: ${props => (props.font_weight ? props.font_weight : 'normal')};
    color: ${props => (props.color ? props.color : 'black')}; 
    margin-bottom: ${props => (props.margin ? props.margin : '2vh')}; 
`
export const Font = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;

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
  font-style: normal;
  font-weight: normal;
  font-size: 1vw;
  line-height: 2vw;
  color: red;
  width: 300px;
`
