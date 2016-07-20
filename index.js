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
  Component={ Item }
  route={new HackerNewsRoute()} />;

ReactDOM.render(rootComponent, mountNode);
