import { createBrowserRouter } from 'react-router-dom';
import LoginScreen from './screens/Login';
import WebcamScreen from './screens/Webcam';

const routerConfiguration = createBrowserRouter([
  {
    path: '/',
    element: <LoginScreen />,
  },
  // {
  //   path: '/loginAuth',
  //   element: <WebcamScreen />,
  // },
]);

export default routerConfiguration;
