import styled from 'styled-components'

export const Welcome = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;

`
export const ProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: stretch;
`
export const Container = styled.div`
    width: 90%;
    height: 90%;
    border-radius: 3%;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    margin: 0px 5% 5vh 5%;
    flex-direction: column;
    padding-top: 2vh;
    background-color: white;
`
export const LoadingContainer = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
`
