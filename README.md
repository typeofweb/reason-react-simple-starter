# Reason React Simple Starter

Welcome Reason React Simple Starter! It's a project created to help you start a project with React using ReasonML (duh). It uses `webpack`.

## FAQ
### What's ReasonML?
[Reason](https://reasonml.github.io) is a typed programming language created by Facebook. Technically speaking it's a front-end for Ocaml. One of the most important features of Reason is powerful and safe type inference. That's what makes ReasonML an interesting alternative to JavaScript, TypeScript or Flow.

### Why ReasonML?
You can read more about it here: https://reasonml.github.io/guide/what-and-why

### Motivation
This starter project is meant to solve the most common problems when creating a new Reason project:

* It comes with a predefined configuration which is ready to use
* It allows you to use any JavaScript libraries through `npm` hassle-free
* It doesn't create tons of temporary JS files when compiling

## Getting started
### Prerequisites
You'll need `node` and `npm`. This project was tested on `node 8` and `npm 5` but any newer should be just fine!

### Installation
Download the repository and run `npm install`. This will install all dependencies and set everything up. You're ready to go!

## Development
Run `npm start`. This single command does 3 things:

* Compiles all Reason files initially into `/lib` directory
* Starts watcher on Reason files in `/src` directory
* Starts `webpack` in a watch mode

Effectively, whenever you make any changes in Reason sources, they get automatically compiled to JS. Then `webpack` picks the new files and bundles into a single file `main.js` inside `/bundledOutputs` dir. This file is ready to be used in the browser (see `/index.html`).

## Production build
Run `npm run build`. For faster and smaller bundle try running `NODE_ENV=production npm run build`

# Demo
[https://mmiszy.github.io/reason-react-simple-starter/](https://mmiszy.github.io/reason-react-simple-starter/)
