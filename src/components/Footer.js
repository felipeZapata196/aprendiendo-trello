import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation()

  return (
    <footer>
    <p>Copyright &copy; 2022</p>
      <Row>
        {location.pathname === "/" ? (
          <>
          <Col md="auto">
            <Link to='/about'>About</Link>
          </Col>
          <Col md="auto">
            <Link to='/profile'>Profile</Link>
          </Col>
          </>
        ) : null}
        {location.pathname !== "/" ? (
          <>
          <Col md="auto">
            <Link to='../'>Go Back</Link>
          </Col>
          </>
        ) : null}
      </Row>
    </footer>
  )
}

export default Footer