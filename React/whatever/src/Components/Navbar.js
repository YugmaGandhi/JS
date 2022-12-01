// by typing rfc which is react function based components
// always keep name of component's first letter caps
import React from 'react'
import PropTypes from 'prop-types' //impt - import proptypes will import protype in react
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.switch?"dark":"light"}`}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.switch?"light":"dark"}`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.switch?"light":"dark"}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link active text-${props.switch?"light":"dark"}`} to="/About">{props.aboutText}</Link>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switch}</label>
</div>
        </div>
      </div>
    </nav>
  )
}

// here Navbar is function/file name and propTypes object defining
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //above props.title is used so for title the format must be string this is what we are defining here also .isRequired do as it states
  aboutText: PropTypes.string.isRequired // same as title
}
// here defaultProps is also an object method which takes certain parameters which are default if not set
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About"
}