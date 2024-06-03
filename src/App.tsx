import { useEffect, useState } from 'react';
import './App.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Details from './Details';

const Home = () => {
  return (
    <div>
      Hello world!
      <Link to="/thisid">Click</Link>
    </div>
  );
};

const App = () => {
  const [isOpen] = useState(true);

  useEffect(() => {
    console.log("Runs once on the initial render");
  }, []);

  useEffect(() => {
    console.log("Runs on the initial render and whenever 'isOpen' changes");
  }, [isOpen]);

  useEffect(() => {
    console.log("Runs on every render");
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Details />,
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
