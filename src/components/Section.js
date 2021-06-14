import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const SectionGroup = styled.div`
background: url(${props => props.image});
height: 900px;
background-size: cover;
display: grid;
grid-template-rows: 150px auto,
grid-gap: 20px;
position: relative;
@media (max-width: 640px) {
    height: 1400px;
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
text-transform: uppercase;
  line-height: 1.2;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
  text-shadow: 1px 1px 2px black, 0 0 4px white, 0 0 4px white;
@media (max-width: 720px){
    font-size: 40px;
}
`

const SectionText = styled.p`
text-align: justify;
font-size: 18px;
color: white;
text-shadow: 1px 1px 2px black, 0 0 1px white, 0 0 10px black;
  line-height: 1.2;
  opacity: 0;
  animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.1s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
`

const SectionContent = styled.p`
position: fixed;
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
bottom: -5px;

@media (max-width: 720px){
    
}
`

const WaveTop = styled.div`
position: absolute;
width: 100%;
transform: rotate(180deg);
top: -10px;

@media (max-width: 720px){
    
}
`

const Section = props => (
    <SectionGroup image={props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={props.logo} />
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText><p>Token Description:
                The SLICK is a decentralized coin that makes it fluent to create easy trading & investing with one and other, family, friends, neighbours, etc.
                <br />
                <br />
                Everything at the interest of the peoples positive input is at the interest of SLICK.
                <br />
                <br />
                Conditions of Token
                Customers & Owners of SLICK are given SLICK for every amount of Dollars, Euro's or which Fiat money they spend at whatever they want to negotiate with.
                <br />
                <br />
                Customers can redeem their SLICK for example for coffee, food, and merchandise at any place where SLICK is accepted as currency.
                <br />
                <br />
                The tokensale will start @ 0.0001$
            </p></SectionText>
            <SectionContent>{props.content}</SectionContent>
        </SectionTitleGroup>
    </SectionGroup>
)

export default Section