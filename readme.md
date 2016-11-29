# Groups Page Frontend [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Using React and Redux.  The frontend app is "wrapped" in an Laravel app.

## Getting Started
### Dev using Hot Module Reloading
1. Make sure you have node and npm installed (latest LTS version)
2. run `npm install`
3. run `npm start`
4. Go to `localhost:3000` to see the page

### Deploy to Production
1. run `npm run deploy:prod` in the root directory
2. This command generates all the necessary files for the groups page into `public/react`

## Reasons
We want to use PHP to generate the initial state of the react/redux application.  
Server rendering will also allow us to "prepare" the HTML to render out certain invisible elements for SEO.

## Key things to know
### There are two different versions of base HTML bootstraping files
 * The development version of the bootstrapping HTML file is located in `frontend/src/index.html`
 * The production version of the bootstrapping HTML is actually a Laravel template file which is located in `resources/views/groups.blade.php`
 
### helper functions to output the right path for production
When webpack compiles the files from the react app source files, it creates all the asset files with a randomly-generated filenames.

There are two helper functions located in `app/Support/helpers.php`.  `react_file` looks at the `public/react` directory and outputs the generated filename

### `___INITIAL_STATE__` is the key global variable in production
There is a **triple underscore** in the beginning, and a **double underscore** at the end.

This is the global variable that the react/redux app is looking for when it's starting up.  (see `frontend/src/main.js`)

### The initial state For Dev
In an effort to centralize the initial states of various scenarios during development.  All the initial states are in `stories/scenarios/*.js`.  

You can change the scenario by changing which initial state to get in `stories/scenarios/initialState.js`

## Convention
Since we are working as a team, it's important to have some convention that will make this project as readable and maintainable as possible.

### 1. Components are separated by folders that has the same name under `components` directory
if you have a component called 'Greet', then there should be a folder named 'Greet' and in it have 3 files: `index.js`, `Greet.js`, and `Greet.scss`.

The reason for having Greet has a folder name and a index.js file is for the convenience of importing said component.  

Per standard, if you import a package with a string like so 'components/Greet', it will test for the following:

1. Does `Greet.js` exist under `components` directory? resolve with `Greet.js`
2. Does `Greet` directory exist under `components directory? resolve with `index.js` under `Greet` directory

The reason why we don't just include the component definition in the `index.js` is because when we are debugging the app, the dev tool will simply display a bunch of `index.js` files in the trace, which is not helpful at all.

### 2. Use CSS Modules when defining React Components
We all felt the pain of CSS when we change the styles in CSS and nothing changes on the page.  It usually comes down to the fact that CSS is globally scoped, and what style gets overwritten is determined by CSS Specificity.

CSS Modules is an attempt to fix that.  What it does is for every classSelector you create in css, it create a random hash that correspond to it.  Then when you import that css into your javascript, webpack creates an object that has that hash matched with the class name as the property name.  You then add the hash to the className of the element you want the style to affect.

### 3. Reducers are all in a directory called `reducers`

### 4. all routes are in a directory called `routes`

### 5. Actions are defined in 
