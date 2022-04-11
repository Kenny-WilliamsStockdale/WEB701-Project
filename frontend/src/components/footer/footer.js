import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Defines footer component upon being rendered to screens.
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; SaTCC</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer