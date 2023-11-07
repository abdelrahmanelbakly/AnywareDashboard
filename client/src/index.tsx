import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk,{ThunkDispatch} from 'redux-thunk'; // An example middleware
import requireAuth from './components/requireAuth ';



const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  
});
export type RootState = ReturnType<typeof rootReducer>;
export default store;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App/>
    </Provider>
    
  </React.StrictMode>
);


