import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { SignupPage } from './SignupPage';
import { StartPage } from './StartPage';
import { ChatPage } from './ChatPage';
import { MorePage } from './MorePage';
import { BestPage } from './BestPage';
import { EDPage } from './EDPage';
import { DMPage } from './DMPage';

export const Router = () => {
  return (
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/start" component={StartPage} />
      <Route path="/" component={HomePage} exact />
      <Route path="/chat" component={ChatPage} exact />
      <Route path="/more" component={MorePage} exact />
      <Route path="/best" component={BestPage} exact />
      <Route path="/ed" component={EDPage} exact />
      <Route path="/rooms/:id" component={DMPage} exact />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
