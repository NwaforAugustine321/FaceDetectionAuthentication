import LoginView from '../../views/Login';

function LoginTemplate({ onSubmit }) {
  return <LoginView handleLogin={onSubmit} />;
}

export default LoginTemplate;
