import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext';
import {Toaster} from "react-hot-toast";
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkoutsContextProvider>
    <App />
    <Toaster/>
    </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

