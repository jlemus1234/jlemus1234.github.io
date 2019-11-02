import React from 'react';
import {Link} from 'gatsby'

const NavigationBar = (currentPage) => (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <p>
            <Link
            to="/"
            style={{
                color:'black',
                marginRight: '10px'
            }}
            >
            Home
            </Link>
        </p>

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
        <p style={{
            //marginRight: '10px'
        }}>
          <Link
          to="/resume"
          style={{
            color: 'black'
          }}
          >Resume
          </Link>
        </p>
      </div>
)

export default NavigationBar;

