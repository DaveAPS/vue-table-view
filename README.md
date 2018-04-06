# TableView
This will help to visualize large data sets in tabular format with pagination,sorting by column and search records on all column or with selected column. Also provieds option to customize layouts and feature as per the application requirments.

# Features
* Node JS, VueJs, Vue-router
* axios - for create promised based client interface
* classnames - simple javascript utility for conditionally joining classNames together.
* autoprefixer - Write your CSS rules without vendor prefixes (in fact, forget about them entirely):
* Karma, Mocha, chai, sinon - for unit test  
* eslint - is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions.
* webpack - for bundle js, css and assets.

## Components
Appliction is mainlly using two components to visualize large sets of data in tabular format.

* Pagination Component
* Tabale View Component

### About Pagination Component
This component shows the pages and provide the functionality to navigate.
    
How to use this component with any page.
* Import the pagination componets and pass the all require values as its attribute like below sample.
 
    <script>
        import Pagination from '@/components/Pagination.vue';
    </script>
    .....
      <template>
          <pagination :current-page="pageOne.currentPage"
              :total-pages="pageOne.totalPages"
              :items-per-page="pageOne.itemsPerPage"
              @page-changed="pageOneChanged" 
              :paginationClass="paginationOption.paginationClass"
              :navigationText="paginationOption.navigationText">
          </pagination>
      </template>

* Attributes:-
    1) :current-page # current page number from you want to start.
    2) :total-pages # Total number of pages
    3) :items-per-page # Number of item need to be shown on a page
    4) @page-changed # call a function on click page number, pagination navigation control
    6) :paginationClass # class name which use to set the look and feel of the pagination controls
    7) :navigationText # This is optional and help to set text of navigation controls
   
        {
            first:{text:'<<',title:'First',arialabel:'First'},
            last:{text:'>>',title:'Last',arialabel:'Last'},
            next:{text:'>',title:'Next',arialabel:'Next',class:'btnPageNav'},
            previous:{text:'<',title:'Previous',arialabel:'Previous',class:'btnPageNav'}
        };
         

### About Pagination Component
    


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## Dependencies
Webpack (v2.3) is a bundler, which combines the various JavaScript, CSS, HTML (and other) files and makes them ready to be handled by the client.

Babel (v6.22) is a compiler for ECMAScript 6 to ECMAScript 5. These are different JavaScript standards and currently browsers are not able to understand all of ECMAScript 6 and so it needs to be converted.

## Testing Dependencies
Karma (v1.4) is a test runner, which spawns a web server with your project's application code inside and executes tests against it.
Mocha (v3.2) is a testing framework for JavaScript.
Chai (v4.1) is an assertion library which can be used with Mocha.


```
## Note: 
Application using Dummy data having *.json files to represent charts as dynamic style. use your one API link with the required json data format response.

Change base url from http-common.js file.

```
```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
```
### Demo

   * Application live demo [https://kind-dijkstra-569799.netlify.com](https://kind-dijkstra-569799.netlify.com).


### License
MIT
