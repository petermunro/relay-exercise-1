import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import Item from './src/Item';
import HackerNewsRoute from './src/HackerNewsRoute';


Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://www.GraphQLHub.com/graphql')
);

const mountNode = document.getElementById('container');
const rootComponent = <Relay.RootContainer
  Component={  /* [Exercise: Which component do we want to render? Hint: It's not the HackerNewsRoute]] */ }
  route={new HackerNewsRoute()} />;

ReactDOM.render(rootComponent, mountNode);

