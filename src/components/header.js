import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import NavigationBar from '../components/NavigationBar'

const Header = ({ siteTitle, currentPage }) => (
  <div
    style={{
      //background: 'rgb(240,240,240)',
      // marginBottom: `1.45rem`,
      borderBottom: '1px solid silver'
    }}
  >
    <div
      style={{
        //margin: `0 auto`,
        //maxWidth: 960, // this is set here, and also in the layout component
        padding: `1.45rem 1.0875rem`,
        //adding
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <h3 style={{
        margin: 0,
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
      </h3>

      <NavigationBar
        pageList={[/*["Home", "/"]*/ ["Projects", "/projects"], ["Writing", "/writing"], ["Resume", "/resume"], ["About", "/AboutMe"]]}
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
