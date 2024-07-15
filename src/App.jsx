import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';
import ContactLayout from './Components/ContactLayout';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
    {
      path: '/contact',
      element: <ContactLayout />,
      children: [
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
