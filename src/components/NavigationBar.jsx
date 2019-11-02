import React from 'react';
import {Link} from 'gatsby'

const NavigationBar = (currentPage) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <p style={{
            marginRight: '10px'
            }}>
            <Link
            to="/"
            style={style.links}
            >
            Home
            </Link>
        </p>

        <p style={{
          marginRight:'10px'
        }}>
          <Link
          to="/AboutMe"
          style={style.links}
          >
          About Me
          </Link>
        </p>
        <p style={{
        }}>
          <Link
          to="/resume"
          style={style.links}
          >Resume
          </Link>
        </p>
      </div>
)

const style={
    links:{
        color: 'black',
        textDecoration: 'none'
        
    }
}

export default NavigationBar;

