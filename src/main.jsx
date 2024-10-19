import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './context/AuthProvider.jsx';
import { setLocalStorage,getLocalStorage } from './utils/localStorage.jsx';

localStorage.clear(); 

setLocalStorage();
getLocalStorage();
createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App/>
  </AuthProvider>
)
