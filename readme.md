# Groups Page Frontend

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

### `___INITIAL_STATE__` is the key global variable
There is a **triple underscore** in the beginning, and a **double underscore** at the end.

This is the global variable that the react/redux app is looking for when it's starting up.  (see `frontend/src/main.js`)