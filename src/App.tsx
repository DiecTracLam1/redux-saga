import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { NotFound, PrivateRoute } from 'Components/Common';

function App() {

  useEffect(() =>{
    cityApi.getAll().then(response => console.log(response));
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        {/* <PrivateRoute path='' /> */}
        <Route element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
