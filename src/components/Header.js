// import React from 'react'   (Not necessary anymore)
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  const onClick = (e) => {
    console.log("Clicked!");
  }

  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClikc={onClick} />
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
}

export default Header
