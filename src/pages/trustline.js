import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Wave from "../components/Wave"


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
    <div className="Hero2">
      <div className="HeroGroup2">
        <img src={require("../images/logo-badger.png")?.default} width="150" alt="" />
        <br />
        <img src={require("../images/accept-trustline.png")?.default} width="180" alt="" />
        <p>SLICK coin can be discovered by searching in the assets of Lobstr.</p>

      </div>
      <Wave />
    </div>

    <div>

    </div>


  </Layout>
)

export default IndexPage