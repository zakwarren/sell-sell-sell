# Sell Sell Sell

An e-commerce app that sells nothing, built using a
microfrontend architecture. The different microfrontends
are built using different techniques and frameworks.

## Start

To run this project, ensure you have node.js installed.
Open a terminal for each of the separate microfrontends,
navigate to their directories, then run:

```powershell
npm start
```

## Services

This application is comprised of a number of different services
to explore a variety of different concepts used in a microfrontend
architecture. These are:

- auth - handles sign in and sign up
- container - provides the host for all the other microfrontends in
  this application. Orchestrates browser history and navigation, and
  holds the global sign in state
- dashboard - a dashboard presenting a variety of interesting data
- marketing - shows the different items and subscriptions available

Most of the front end apps use React, but the dashboard service is
built in Vue to explore how different frameworks can be used.
