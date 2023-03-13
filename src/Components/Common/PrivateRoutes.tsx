import React, { PureComponent } from 'react';
import { redirect, Route, RouteProps } from 'react-router-dom';


export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return redirect("/login");

  return <Route {...props} />;
}
