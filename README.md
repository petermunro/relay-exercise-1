# Relay Exercise 1

This exercise has some missing pieces for you to complete.
The aim is to retrieve a single article from _Hacker News_, via Clay Allsopp's service at https://www.graphqlhub.com/.

1. Run `npm install`

1. Browse the source. Answer these questions:

    1. Which source file renders the app into the DOM?
    1. What does the `Relay.RootContainer` component need as input parameters?
    1. Of what type is the component that we'll render?

1. Where we use the `Relay.RootContainer`, specify the correct component type to render.

1. To have the route incorporate a `fragment` for the `Item`, include the following within the Route's GraphQL query:

           ${Component.getFragment('storyItem')}

1. Run `npm start` and your app should render a page.

1. Browse `src/Item.jsx`. Add in the missing fields.
