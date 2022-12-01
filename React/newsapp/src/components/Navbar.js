import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={require("../logo/monkey.png")} alt="Logo" width="40" height="34" className="d-inline-block align-text-top"/>
                  <span className='mx-2'>NewsMonkey</span>
                </a>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
