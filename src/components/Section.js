import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
background: url(${props => props.image});
height: 720px;
background-size: cover;
display: grid;
grid-template-rows: 300px auto,
grid-gap: 20px;
position: relative;
@media (max-width: 640px) {
    height: 820px;
}
`

const SectionLogo = styled.img`
align-self: flex-end;
width: 120px;
margin: 0 auto;
margin-top: 30px;
`

const SectionTitleGroup = styled.div`
display: grid;
grid-template-columns: 300px auto;
margin: 0 40px;
grid-gap: 20px;
grid-template-rows: auto 100%;
@media (max-width: 720px) {
    grid-template-columns: 1fr;
}
`

const SectionTitle = styled.h3`
color: white;
font-size: 60px;
margin: 0;
line-height: 1.2;
@media (max-width: 720px){
    font-size: 40px;
}
`

const SectionText = styled.p`
white-space: pre-wrap;
font-size: 18px;
color: white;
text-shadow: 1px 1px 2px black, 0 0 1px white, 0 0 3px black;
`

const SectionContent = styled.p`
font-size: 16px;
color: white;

text-align: justify;
padding-top: 10px;

@media (max-width: 720px){
    color: black;
    position: relative;
    padding-top: -30px;
}
`

const WaveBottom = styled.div`
position: absolute;
width: 100%;
bottom: -76px;

@media (max-width: 720px){
    display: none;
}
`

const WaveTop = styled.div`
position: absolute;
width: 100%;
transform: rotate(180deg);
top: -81px;

@media (max-width: 720px){
    display: none;
}
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
            <SectionContent>{props.content}</SectionContent>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section