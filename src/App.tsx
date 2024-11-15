import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/unifontex/400.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import { CssBaseline } from '@mui/material';
import { PageRoutes } from './pages/pageRoutes';

const router = createBrowserRouter([
  {
    path: "",
    element: <PageLayout />,
    children: PageRoutes.map(route => {
      return {
        path: route.path,
        element: route.element,
      }
    })
  }
])

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

export default App
