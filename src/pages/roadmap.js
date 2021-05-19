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
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


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
        <div className="Hero3">
            <div className="HeroGroup3">

                <br /><br /><br />
                <br /><br /><br />

                <img src={require("../images/logo-badger.png")?.default} width="150" alt="" />
                <h1>
                    ROADMAP
                </h1>

                <br /><br /><br />
                <br /><br /><br />

                <div className="Logos">
                    <img src={require("../images/mera.png")?.default} width="60" alt="" />
                    <img src={require("../images/logo-figma.png")?.default} width="60" alt="" />
                    <img src={require("../images/logo-studio.png")?.default} width="60" alt="" />
                    <img src={require("../images/logo-framer.png")?.default} width="60" alt="" />
                    <img src={require("../images/logo-react.png")?.default} width="60" alt="" />
                </div>
            </div>
            <Wave />
        </div>


        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(47, 26, 41)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(47, 26, 41)' }}
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(47, 26, 41)' }}
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(47, 26, 41)' }}
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(47, 26, 41)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(148, 60, 142)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(148, 60, 142)' }}
                date="April 2013"
                iconStyle={{ background: 'rgb(148, 60, 142)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(148, 60, 142)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(148, 60, 142)' }}
                date="November 2012"
                iconStyle={{ background: 'rgb(148, 60, 142)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: 'rgb(148, 60, 142)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(148, 60, 142)' }}
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(148, 60, 142)', color: '#fff' }}

            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(249, 196, 118)', color: '#fff' }}

            />
        </VerticalTimeline>

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