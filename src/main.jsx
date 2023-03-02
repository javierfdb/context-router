import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {BrowserRouter} from 'react-router-dom';
import PigContextProvider from './context/PigContext';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
 
    <BrowserRouter>
     <PigContextProvider>
      <App />
     </PigContextProvider>
    </BrowserRouter>
    
  // </React.StrictMode>,
)
