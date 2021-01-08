import React, {Component} from 'react'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import GoalSelectionPage from './pages/goal-selection/goal-selection.component';

import './App.css';
import Navbar from './components/navbar/navbar.component';
import ActivitySelectionPage from './pages/activity-selection/activity-selection.component';

import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { cache } from './apollo/cache';


class App extends Component {
  state = {
    client: null,
    loaded: false,
  };

  async componentDidMount() {
    
    const typeDefs = gql`
      extend type Query {
        cartActivities: [ID!]
      }
    `;

    const client = new ApolloClient({
      cache,
      uri: 'https://5t9ho02u.api.sanity.io/v1/graphql/production/default',
      typeDefs,
    })

    try {
      // See above for additional options, including other storage providers.
      await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
      });
    } catch (error) {
      console.error('Error restoring Apollo cache', error);
    }

    this.setState({
      client,
      loaded: true,
    });
  }

  render() {
    const { client, loaded } = this.state;

    if (!loaded) {
      return <div>Loading...</div>
    }

    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar />
          <Router>
            <Switch>
              <Route exact path="/">
                <GoalSelectionPage />
              </Route>
              <Route path="/activity-selection">
                <ActivitySelectionPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    )
  };
}

export default App;
