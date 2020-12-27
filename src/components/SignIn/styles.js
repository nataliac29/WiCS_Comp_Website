import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    height: 100%;
`
export const InnerLogin = styled.div`
    background-color: white;
    display: flex; 
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 50px; 
    border-radius: 5px; 
    height: 100%;
    @media (min-width: 600px) and (max-width: 1000px) {
      margin: 0rem;
    }
    @media (max-width: 600px) {
      margin: 0rem;
      width: 85vw;
      padding: 30px;
    }
`
export const Container = styled.div`
    margin-top: 10vh;
    margin-bottom: 10%;
    display: flex;
    flex-direction: row;
    color: #c93826;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 100vw;
        align-items: stretch;
    }

`

export const PictureContainer = styled.div`   
    display: flex; 
    flex: 1;
    flex-direction: column; 
    align-items: center; 
    justify-content: center;
    padding-left: 2%;
    @media (max-width: 1000px) {
        flex-direction: column;
        width: 100vw;
        align-items: center; 
        text-align: center;
    }

`
export const LoadingContainer = styled.div`   
    width: 50%;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
