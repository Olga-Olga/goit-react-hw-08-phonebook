import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* added baseline */}
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer />
    </ThemeProvider>
  </BrowserRouter>
);
