import LoginView from '../../views/Login';

function LoginTemplate({ handSubmit, handChange }) {
  return <LoginView handSubmit={handSubmit} handChange={handChange} />;
}

export default LoginTemplate;
