import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import NavigationBar from '../components/NavigationBar'

const Header = ({ siteTitle }) => (
  <div
    style={{
      // Sets the color for the header
      background: 'rgb(181, 188, 199)',
      marginBottom: `1.45rem`,
      // adding
      //display: 'flex',
      //justifyContent: 'space-between'

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        //adding
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h1 style={{ margin: 0,
      // adding 
      display: 'inline-block'
      }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

    {/* </div> */}

      <NavigationBar
      pageList={[["Home", "/"],["About Me", "/AboutMe"], ["Resume", "/resume"]]}
      
      />
{/*       <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <p style={{
        marginRight:'10px'
      }}>
        <Link
        to="/AboutMe"
        style={{
          color: 'black',
        }}
        >
        About Me
        </Link>
      </p>
      <p>
        <Link
        to="/resume"
        style={{
          color: 'black'
        }}
        >Resume
        </Link>
      </p>
    </div> */}

        </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
