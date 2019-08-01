import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import Admin from "../../layouts/Admin";
import SignIn from "../../views/Auth/SignIn";

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from "apollo-boost";
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";

import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: red
    },
});


let url = process.env.REACT_APP_APOLLO_CLIENT;
const cache = new InMemoryCache();
const link = new HttpLink({
    uri: url
})
const client = new ApolloClient({
    cache,
    link
});

const App = () => (
    <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route path={ROUTES.ADMIN} component={Admin} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                </Switch>
            </Router>
        </ApolloProvider>
    </ThemeProvider>
);

export default withAuthentication(App);