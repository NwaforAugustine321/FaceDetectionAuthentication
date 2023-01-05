import { Container, Row, Col, Stack, Button, Form } from 'react-bootstrap';

function LoginView({ handSubmit, handChange }) {
  return (
    <Container fluid='sm' className='my-auto vh-100'>
      <Row className='h-100 align-items-center'>
        <Col>
          <Stack gap={2} className='col-md-5 mx-auto'>
            <Form>
              <Form.Group className='mb-3' controlId='email'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  placeholder='JohnDon.com'
                  onChange={handChange}
                />
              </Form.Group>
            </Form>
            <Button variant='secondary' onClick={handSubmit}>
              Continue With Face Login
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginView;
