import React from 'react';
import './styles/main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from './styles/defaultTheme';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
]);

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={createTheme(defaultTheme)}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
