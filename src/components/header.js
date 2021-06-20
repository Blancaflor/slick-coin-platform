import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
/* import logo from '../images/logo-badger.png' */
import './Header.css'

<link rel="shortcut icon" href="/images/myfavicon.ico"></link>
class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    }
    else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
        <link rel="shortcut icon" href="/images/myfavicon.ico"></link>
          {/*<Link to="/"><img src={logo} width="50" alt="" /></Link>*/}
          <br />
          <Link to="/">Services</Link>
          <Link to="/team&advisors">Team & Advisors</Link>
          <Link to="/roadmap">Roadmap</Link>
          <Link to="/trustline"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
