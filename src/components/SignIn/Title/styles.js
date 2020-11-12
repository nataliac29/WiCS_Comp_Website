import styled from 'styled-components'

export const Title = styled.p`
    line-height: 1em;
    font-size: ${props => props.fontSize};
    font-weight: ${props => (props.font_weight ? props.fontWeight : 'normal')};
    color: ${props => (props.color ? props.color : 'black')}; 
    margin-bottom: ${props => (props.margin ? props.margin : '2vh')}; 
    text-align:center;
`
