import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Home from './Pages/Home'
import App from './App'
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'
import AddUsers from './components/AddUsers';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   
     
  <React.StrictMode>
    <ChakraProvider>
    <ApolloProvider client={client}>
      <App />
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="new" element={<AddUsers/>} />
    
    </Routes>
    </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
