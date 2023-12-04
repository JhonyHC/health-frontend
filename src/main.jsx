import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './ErrorPage.jsx';


import DietList from './components/Dieta.jsx';
import GroupComponent from './components/Group.jsx';
import ExerciseComponent from './components/Ejercicio.jsx';
import HistoryComponent from './components/Historial.jsx';
import GoalComponent from './components/Meta.jsx';
import MetricComponent from './components/Metrica.jsx';
import Profile from './components/Cominidad.jsx';
import MuroFacebook from './components/Muro.jsx';
import Perfil from './components/Perfil.jsx';
import Comunidades from './components/Comunidades.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MuroFacebook/> },
      {
        path: '/dieta',
        element: <DietList />,
      },
      {
        path: '/grupo',
        element: <GroupComponent />,
      },
      {
        path: '/ejercicio',
        element: <ExerciseComponent />,
      },
      {
        path: '/historial',
        element: <HistoryComponent />,
      },
      {
        path: '/meta',
        element: <GoalComponent />,
      },
      {
        path: '/metrica',
        element: <MetricComponent />,
      },
      {
        path: '/comunidades',
        element: <Comunidades />,
      },
      {
        path: '/perfil',
        element: <Perfil />,
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
