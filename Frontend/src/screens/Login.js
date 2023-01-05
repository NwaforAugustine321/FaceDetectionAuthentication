import LoginContainer from '../components/containers/Login';
import WebcamContainer from '../components/containers/Webcam';

function LoginScreen() {
  return <LoginContainer WebcamContainer={WebcamContainer} />;
}

export default LoginScreen;
