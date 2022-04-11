import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// Container layout for login and sign up forms
const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
