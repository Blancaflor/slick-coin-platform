import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Wave from "../components/Wave"
import Section from "../components/Section"


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
        <p href="#">SLICK coin can be discovered by searching in the asset list of Lobstr</p>
        <a class="Account" href="https://lobstr.co/" target="_blank"><p>Not in ownership of a Lobstr account yet? Get one first!</p></a>
        <a class="Account" href="https://stellar.expert/explorer/public/account/GDL2QBT4SEWIF2HOXBLKTQPG7ZVUVCCEI7USTV75ISW2NY254M7W2RQX" target="_blank"><p>Take a look at the SLICK Address on Stellar Expert</p></a>
      </div>
      <div className="spacebetween">
        <Wave />
      </div>
      <div className="switch">
        <Wave />
      </div>
    </div>

    <div className="Hero2">
      <div className="HeroGroup2">
        <img className="img2" src={require("../images/logo-badger.png")?.default} width="150" alt="" />
        <br />
        <img src={require("../images/bsc-QR-code.png")?.default} width="180" alt="" />
        <p href="#">SLICK coin can be discovered in the TrustWallet Application or can be searched in Metamask</p>
        <a class="Account" href="https://bscscan.com/address/0x72c7989aa5643bf7edbde703517d6f007d0436dc" target="_blank"><p>Take a look at the Slick Address on BscScan</p></a>
        <a class="Account" href="https://trustwallet.com/" target="_blank"><p>Get the Trustwallet App</p></a>
        <a class="Account" href="https://metamask.io/" target="_blank"><p>Get Metamask</p></a>
      </div>
      <div className="spacebetween">
        <Wave />
      </div>

    </div>

    <Section
      image={require('../images/GreyHoney.jpg')?.default}
      logo={require('../images/logo-badger.png')?.default}
      title="More coming soon!"
      text="Token Description:
      The SLICK is a decentralized coin that makes it fluent to create easy trading & investing with one and other, family, friends, neighbours, etc.
      Everything at the interest of the peoples positive input is at the interest of SLICK.

      Customers can redeem their SLICK for example for coffee, food, and merchandise at any place where SLICK is accepted as currency."
      content="{The tokensale will start @ 0.0001$}"
    />

  </Layout>
)

export default IndexPage