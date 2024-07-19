import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.js';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Provide the Redux store */}
      <PersistGate loading={null} persistor={persistor}> {/* Wrap with PersistGate */}
        <BrowserRouter> {/* Wrap with BrowserRouter for routing */}
          <App /> 
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
