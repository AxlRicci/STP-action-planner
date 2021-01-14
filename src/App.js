import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';

import PlannerContextProvider from './contexts/plannerContext'

import ActivitySelectionPage from './pages/activity-selection/activity-selection.component';
import GoalSelectionPage from './pages/goal-selection/goal-selection.component';
import HomePage from './pages/home/home.component';
import PlannerOverview from './pages/planner-overview/planner-overview.component';

import './App.css';
import Navbar from './components/navbar/navbar.component';


class App extends Component {
  state = {
    client: null,
    loaded: false,
  };

  async componentDidMount() {
    const cache = new InMemoryCache({});

    const client = new ApolloClient({
      cache,
      uri: 'https://5t9ho02u.api.sanity.io/v1/graphql/production/default',
    })

    try {
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
          <PlannerContextProvider>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/goal-selection">
                  <GoalSelectionPage />
                </Route>
                <Route path="/activity-selection">
                  <ActivitySelectionPage />
                </Route>
                <Route path="/plan-overview">
                  <PlannerOverview />
                </Route>
              </Switch>
            </Router>
          </PlannerContextProvider>
        </div>
      </ApolloProvider>
    )
  };
}

export default App;
