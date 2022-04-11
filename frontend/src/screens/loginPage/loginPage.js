import React, { useState} from 'react'
import './loginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../../components/formContainer/formContainer'
import axios from 'axios'
import Loading from '../../components/loader/loader'
import Message from '../../components/message/message'


const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()

    setError(false)

    try {
      const config = {
        headers: {
          "Content-type":"application/json"
        }
      } 
      setLoading(true) 

      // react hook 
      // post user login
      // push to local storage
      // redirect to product page
      // checking data has been called by console.log
      const { data } = await axios.post('/users/login', 
      
      {
        email, 
        password,
      },
        config
      )
      console.log(data)
      localStorage.setItem('userInfo', JSON.stringify(data))
      setLoading(false)
      navigate("/products")
    } catch (error) {
      setError(error.response.data.message)
      setLoading(false)
    }
    
  }
  // page layout for login input boxes. 
  // upon submit checks submit handler function is called
  return (
    <FormContainer>
      <h1 id="log-h1">Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loading />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer?{' '}
          <Link to='/signup'>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginPage