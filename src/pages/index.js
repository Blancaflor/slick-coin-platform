import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import staticdata from '../../staticdata.json'
import Cell from "../components/Cell"
import styled from 'styled-components'


const SectionCaption = styled.p`
position: relative;
top: 30px;
font-weight: 600;
font-size: 18px;
text-transition: uppercase;
color: #94A4BA;
text-align: center;
`

const SectionCellGroup = styled.div`
max-width: 800px;
margin: 0 auto 100px;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-column-gap: 20px;
padding: 0 20px;

@media (max-width: 800px) {
  grid-template-columns: repeat(1, 1fr);
}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <img src={require("../images/logo-badger.png")?.default} width="150" alt="" />
        <h1>
          Welcome to the <br /> SLICK <br /> platform.
        </h1>

        <p>Get your SLICK coin!</p>
        <Link to="/page-2/">Watch the video</Link> <br />
        <div className="Logos">
          <img src={require("../images/mera.png")?.default} width="60" alt="" />
          <img src={require("../images/logo-figma.png")?.default} width="60" alt="" />
          <img src={require("../images/logo-studio.png")?.default} width="60" alt="" />
          <img src={require("../images/logo-framer.png")?.default} width="60" alt="" />
          <img src={require("../images/logo-react.png")?.default} width="60" alt="" />
          <img src={require("../images/logo-swift.png")?.default} width="60" alt="" />
        </div>
      </div>
      <Wave />
    </div>

    <div className="Cards">
      <h2>How to invest SLICK?</h2>
      <div className="CardGroup">
        <a href="https://lobstr.co/" target="_blank" ><Card
          title="Create a Lobstr Account"
          text="Account | Wallet"
          image={require("../images/reflection.png")?.default}
        /></a>
        <Link to="/trustline"><Card
          title="Create a trustline with SLICK"
          text="Slick Address | QR Code"
          image={require("../images/reflection6.png")?.default}
        /></Link>
      </div>
    </div>
    <Section
      image={require('../images/fractal.jpg')?.default}
      logo={require('../images/logo-badger.png')?.default}
      title="More coming soon!"
      text="Token Description:
      The SLICK is a decentralized coin that makes it fluent to create easy trading & investing with one and other, family, friends, neighbours, etc.
      Everything at the interest of the peoples positive input is at the interest of SLICK.

      Conditions of Token
      Customers & Owners of SLICK are given SLICK for every amount of Dollars, Euro's or which Fiat money they spend at whatever they want to negotiate with. 

      Customers can redeem their SLICK for example for coffee, food, and merchandise at any place where SLICK is accepted as currency."
      content="{The tokensale will start @ 0.0001$}"
    />
    {/*
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
    */}
  </Layout>
)

export default IndexPage