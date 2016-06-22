'use strict';
require('es6-promise').polyfill();
require('isomorphic-fetch');
var babelRelayPlugin   = require('babel-relay-plugin');
var request            = require('sync-request');
var introspectionQuery = require('./introspectionQuerySansSubscriptions');
var url = require('url');


url.format({ query: introspectionQuery });

const graphqlHubUrl = 'http://www.GraphQLHub.com/graphql';

var schema = require('./graphiql-schema.json');

module.exports = babelRelayPlugin(schema.data, {
  abortOnError: true,
});