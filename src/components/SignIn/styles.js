import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`
export const InnerLogin = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 50px; 
    border-radius: 5px; 
    height: 100%;
    @media (max-width: 1000px) {
      margin: 0rem;
    }
`
export const Container = styled.div`
    min-height: 100%;
    margin-top: 10%;
    display: flex;
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
