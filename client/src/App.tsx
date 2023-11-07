import React, { useEffect } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import Container from './components/container';
import 'tailwindcss/tailwind.css';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { getAnnouncements } from './actions/announcements';
import { getUpcomming } from './actions/upcomming';
import RequireAuth from './components/requireAuth '; 

function App() {
  const isAuthenticated = useSelector((state: { auth: { isAuthenticated: boolean } }) => state.auth.isAuthenticated);
  const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();
  
  useEffect(() => {
    dispatch(getAnnouncements());
    dispatch(getUpcomming());
  }, []);

  return (
    <div className="flex bg-gray-800 min-h-full">
      {isAuthenticated ? (
        <>
          <Sidebar />
          <Header />
          <Container />
        </>
      ) : (
        <RequireAuth />
      )}
    </div>
  );
}

export default App;





