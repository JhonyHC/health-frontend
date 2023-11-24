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
import Inicio from './components/Inicio.jsx';
import Comunidad from './components/Comunidad.jsx';
import Salud from './components/Salud.jsx';
import ErrorPage from './ErrorPage.jsx';


import DietList from './Dieta.jsx';
import GroupComponent from './Group.jsx';
import ExerciseComponent from './Ejercicio.jsx';
import HistoryComponent from './Historial.jsx';
import GoalComponent from './Meta.jsx';
import MetricComponent from './Metrica.jsx';
import Profile from './Cominidad.jsx';
import MuroFacebook from './Muro.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Inicio/> },
      
      { path: 'salud', element: <Salud/> },
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
        path: '/comunidad',
        element: <Profile />,
      },
      {
        path: '/muro',
        element: <MuroFacebook />,
      },
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
