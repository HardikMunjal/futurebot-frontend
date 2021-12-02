#npm init // create package.json file
#npm install react react-dom    
//React is for building the React components, while React DOM is responsible for rendering React on the browser. 

#create index.html file

<div id="react-dom-container"></div>
<script src="index.jsx"></script>



#create index.jsx file
#create react component and  add it to react-dom-container div

#we will have to convert our ES6 + JSX together to a backwards-compatible version of Javascript. This is known as “transpiling”. For this purpose, we will be using Babel.

Once again, the browser does not understand the “require” import syntax.
Modularizing and Bundling code using Webpack
So we will use Webpack. Webpack is a tool that bundles Javascript modules together. Let us install Webpack for our project.

webpack.config.js


// configuring webpack, babel , local server to run react 