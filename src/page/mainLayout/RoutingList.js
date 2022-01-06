import React from 'react';
import { Route } from 'react-router-dom';
import About from '../about/AboutPage';
import Home from '../home/HomePage';

export const routes = [
  {
    path: '/home',
    component: Home,
    key: '1',
    breadcrumbName: 'Home',
  },
  {
    path: '/about',
    component: About,
    key: '2',
    breadcrumbName: 'About',
  },
];

export function RoutingList() {
  return routes.map(item => {
    if (item.path.split('/').length === 2) {
      return (
        <Route exact path={item.path} component={item.component} key={item.key} />
      );
    }
    return <Route path={item.path} component={item.component} key={item.key} />;
  });
}