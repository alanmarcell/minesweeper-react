import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';

import Home from './core/components/Home';
import Main from './core/components/Main';
import Position from './game/components/Position';
import UserReport from './users/components/UserReport';

import ViewerQueries from './core/queries/ViewerQueries';

export default (
    <Route
        path="/"
        component={Main}
        queries={ViewerQueries}
    >
        <Route
            path="minesweeper"
            component={Position}
        />
        <IndexRoute
            component={Home}
        />
        <Route
            path="userReport"
            component={UserReport}
            queries={ViewerQueries}
        />
    </Route>
);
