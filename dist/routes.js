import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Home from './core/components/Home';
import Main from './core/components/Main';
import UserReport from './users/components/UserReport';
import ViewerQueries from './core/queries/ViewerQueries';
export default (React.createElement(Route, { path: "/", component: Main, queries: ViewerQueries },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: "userReport", component: UserReport, queries: ViewerQueries })));
//# sourceMappingURL=routes.js.map