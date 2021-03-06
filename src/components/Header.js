// import React from 'react'   (Not necessary anymore)
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = (props) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{props.title}</h1>
      {location.pathname === "/" ? (<Button 
        color={props.showAdd === true ? "red" : "green"} 
        text={props.showAdd === true ? "Close" : "Add"} 
        onClick={props.onAdd} 
      />) : null}
    </header>
  )
}

// This allows to add default props in case none is passed for the component.
Header.defaultProps = {
  title: "Task Tracker",
}

// Defines the type of a prop, good convention to catch errors.
// Example = { id: PropTypes.number.isRequired }
Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAdd: PropTypes.bool,
}

export default Header
