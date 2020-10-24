import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: stretch;
`
export const ContentContainer = styled.div`
    flex: 1;
`
export const Footer = styled.div`
   background-color: ${props => props.theme.colors.accents.primary};
   height: 40px;

`
