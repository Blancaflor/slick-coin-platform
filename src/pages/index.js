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
        <h1>
          Welcome on the <br /> platform <br /> of crypto SLICK coin.
        </h1>
        <p>Welcome to the page of SLICK coin.</p>
        <p>Go get your SLICK coin!</p>
        <Link to="/page-2/">Watch the video</Link> <br />
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")?.default} width="50" alt="" />
          <img src={require("../images/logo-figma.png")?.default} width="50" alt="" />
          <img src={require("../images/logo-studio.png")?.default} width="50" alt="" />
          <img src={require("../images/logo-framer.png")?.default} width="50" alt="" />
          <img src={require("../images/logo-react.png")?.default} width="50" alt="" />
          <img src={require("../images/logo-swift.png")?.default} width="50" alt="" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
      </div>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
      </div>
      <div className="CardGroup">
        <Card
          title="Design System"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="Sound Design"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
        <Card
          title="ARKit 2"
          text="12 sections"
          image={require("../images/wallpaper.jpg")?.default}
        />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')?.default}
      logo={require('../images/logo-react.png')?.default}
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