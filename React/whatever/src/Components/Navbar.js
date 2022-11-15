// by typing rfc which is react function based components
// always keep name of component's first letter caps
import React from 'react'
import PropTypes from 'prop-types' //impt - import proptypes will import protype in react


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
  )
}

// here Navbar is function/file name and propTypes object defining
Navbar.propTypes={
    title : PropTypes.string.isRequired, //above props.title is used so for title the format must be string this is what we are defining here also .isRequired do as it states
    aboutText : PropTypes.string.isRequired // same as title
}
// here defaultProps is also an object method which takes certain parameters which are default if not set
Navbar.defaultProps = {
    title : "set title here",
    aboutText : "About"
}