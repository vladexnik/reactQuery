import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Post from './Post'
import { QueryClient,  QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.css';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient=new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
        <Post />
       
    </QueryClientProvider>
);

// https://reactdev.ru/libs/react-query