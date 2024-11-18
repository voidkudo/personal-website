import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/unifontex/400.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { PageRoutes } from './pages/pageRoutes';
import ErrorPage from './pages/ErrorPage';

const theme = createTheme({
  typography:{
    fontFamily: "UnifontEX"
  }
})

const router = createBrowserRouter([
  {
    path: "/personal-website",
    element: <PageLayout />,
    errorElement: <ErrorPage />,
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
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
