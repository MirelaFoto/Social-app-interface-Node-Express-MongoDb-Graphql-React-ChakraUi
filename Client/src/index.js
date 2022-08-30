import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

import App from './App'
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Center, ChakraProvider } from '@chakra-ui/react'
import AddUsers from './Pages/AddUsers';
import ArchivedListItems from './Pages/Archived';
import { UserContextProvider } from './Store/store';
import Home from './Pages/Home';


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
    <UserContextProvider>
      <App />
    <Routes>
    <Route path="/" element={<Home />} /> 
    <Route path="new" element={<AddUsers/>} />
    <Route path="fave" element={< ArchivedListItems />} />
    <Route
      path="*"
      element={
        
          <Center fontSize="4xl" color='red.400'>There's nothing here!</Center>
        
      }
    />
    </Routes>
    </UserContextProvider>
    </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
