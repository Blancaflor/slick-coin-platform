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
          Welcome to the <br /> crypto SLICK <br /> platform.
        </h1>
        <p>Slick welcomes you.</p>
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
      <h2>More info to come.</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 sections"
          image={require("../images/reflection.png")?.default}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/reflection6.png")?.default}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require("../images/reflection3.png")?.default}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/reflection7.png")?.default}
        />
      </div>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 sections"
          image={require("../images/reflection.png")?.default}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/reflection6.png")?.default}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require("../images/reflection3.png")?.default}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/reflection7.png")?.default}
        />
      </div>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 sections"
          image={require("../images/reflection.png")?.default}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/reflection6.png")?.default}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require("../images/reflection3.png")?.default}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/reflection7.png")?.default}
        />
      </div>
    </div>
    <Section
      image={require('../images/fractal.jpg')?.default}
      logo={require('../images/logo-badger.png')?.default}
      title="React for Designers"
      text="Learn how to build a modern site using 
    React and the most efficient libraries to get 
    your site/product online. Get familiar with
    components, Grid CSS, animations, interactions,
    dynamic data withe Contentful and deploying your
    site with Netifly."
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage