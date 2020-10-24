import styled from 'styled-components'

export const Welcome = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;
    margin-left: 5vw;

`
export const NavContainer = styled.div`
    width: 100%; 
    display: flex; 
    padding: 10px 50px 0px 50px; 
    background-color: #900c3f;
    align-items: center;
`

export const Container = styled.div`
    width: 100%; 
    min-height: 70%; 
    min-height: 70vh; 
    /* height: 100%;  */
    display: flex; 
    align-items: center; 
    justify-content: center; 
    padding-top: 20px; 
`
export const InnerDiv = styled.div`
    height:50vh;
    /* margin:${({ right }) => (right ? '0 20% 0 auto' : '0 auto 0 20%')}; */
    width: 60%; 
    display:flex;
    /* flex-direction:column; */
    justify-content: center; 
    align-items: center; 
    box-shadow: 0 3px 6px rgba(0,0,0,0), 0 3px 6px rgba(0,0,0,0);
`
export const OuterDiv = styled.div`
    display: flex; 
    width: 100%; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    
`
export const FormDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    padding: 40px; 
    width: 60%; 
`

export const UploadDiv = styled.div`
    width: 40%; 
    padding: 60px; 

`
export const Button = styled.button`
    padding: 15px 40px 15px 40px; 
    width: 100%; 
    border-radius: 5px; 
    border: none; 
    font-weight: bold; 
    font-size: 1.1rem; 
    color: white;
    background-color: #e26355; 
    /*border: 2px solid white;*/
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    cursor: pointer;
`
export const Input = styled.input`
    border:none;
    padding: 4px;
    margin: 0 0 20px 0;
    background-color:white;
    border: none; 
    border-bottom: 2px solid #e26355; 
    font-size: 1.1rem;
    color: black;
    transition: .2s;
    width: 60%;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing:2px;
    line-height: 1em;

    &:focus{
        background-color:white;
        color:black;
        outline:none;
    }
`
export const Input2 = styled.textarea`
    border:none;
    padding: 4px;
    margin: 0 0 20px 0;
    border: none; 
    border-bottom: 2px solid #e26355; 
    border-radius: 2%;
    font-size: 1.1rem;
    color: black;
    transition: .2s;
    width: 100%;
    align-self: center;
    height: 15vh;
    font-family: 'Roboto', sans-serif;
    font-weight: 'medium';
    letter-spacing: 2px;
    line-height: 1em;
    background-color: #f2f2f2;

    &:focus{
        background-color:white;
        color:black;
        outline:none;

    }
`
