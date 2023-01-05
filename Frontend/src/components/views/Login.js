import { Container } from 'react-bootstrap';

function LoginView({ handleLogin }) {
  return (
    <Container>
      <input />
      <button onClick={handleLogin}>Next</button>
    </Container>
  );
}

export default LoginView;
