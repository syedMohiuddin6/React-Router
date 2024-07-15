import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/home',
      element: <><Navbar /> <Home /></>,
    },
    {
      path: '/about',
      element: <><Navbar /> <About /></>,
    },
    {
      path: '/contact',
      element: <><Navbar /> <Contact /></>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
