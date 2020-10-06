import React from 'react';

import {Switch, Route } from 'react-router-dom';

import { card } from './card';
// import { Contact } from './Contact';
// import { Home } from './Home';

const Main = () => {
    return (
        <Switch>
            {/* <Route exact path='/' component={Home}></Route> */}
            <Route exact path='/card' component={card}></Route>
            {/* <Route exact path='/contact' component={Contact}></Route> */}
        </Switch>
    );
}

export { Main };