import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import routerConfiguration from './routesConfiguration';

function App() {
  return <RouterProvider router={routerConfiguration} />;
}

export default App;
