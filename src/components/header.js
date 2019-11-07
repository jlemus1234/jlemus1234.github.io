import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import NavigationBar from '../components/NavigationBar'

const Header = ({siteTitle, currentPage}) => (
  <div
    style={{
      // Sets the color for the header
      //background: 'rgb(181, 188, 199)',
      background: 'rgb(240,240,240)',
      marginBottom: `1.45rem`,
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

      <NavigationBar
      pageList={[["Home", "/"],["About Me", "/AboutMe"], ["Resume", "/resume"]]}
      currentPage={currentPage}
    />

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
