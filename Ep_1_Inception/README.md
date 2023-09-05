# _Episode 01 - Inception_

## What is `Emmet`?
  - `Emmet` is the essential toolkit for web-developers.
  - It allows you to `type shortcuts` that are then expanded into full pieces of code for writing `HTML and CSS`, based on an abbreviation structure most developers already use that expands into full-fledged HTML markup and CSS rules.


## Difference between a `Library` and `Framework`?
Below are the differences between `Library` & `Framework`:
    <table>
        <tbody>
            <tr>
                <td><strong>Parameters</strong></td>
                <td><strong>Library</strong></td>
                <td><strong>Framework</strong></td>
            </tr>
            <tr>
                <td>Definition</td>
                <td>Libraries provide developers with predefined functions and classes to make their work easier and boost the development process.</td>
                <td>Framework, on the other hand, is like the foundation upon which developers build applications for specific platforms.&nbsp;</td>
            </tr>
            <tr>
                <td>Inversion of Control</td>
                <td>By using a library, you can control the flow of the application and call the library.&nbsp;</td>
                <td>In contrast, when you use a framework, the control is inverted, i.e., the framework controls the flow and calls your code.</td>
            </tr>
            <tr>
                <td>Collection</td>
                <td>Generally, libraries are a collection of helper modules, objects, classes, functions, message templates, pre-written code, etc.</td>
                <td>Frameworks consist of a lot of APIs, compilers, toolsets, support programs, libraries, etc.</td>
            </tr>
            <tr>
                <td>Code Modification</td>
                <td>Codes in libraries are geared toward a particular program or to solve a specific development problem. Therefore, developers must modify library code to meet their needs.</td>
                <td>Despite the fact that frameworks generate new codes for developers. These codes cannot be altered or modified later. Unlike libraries, frameworks do not allow users to modify their pre-written codes, so you don’t have to worry about deleting or changing them.</td>
            </tr>
            <tr>
                <td>Scope</td>
                <td>It is possible to call a library out of context. You may use the library wherever you see fit in your code.</td>
                <td>On the other hand, you can only call and use what belongs to a Framework within the same Framework.&nbsp;</td>
            </tr>
            <tr>
                <td>Function</td>
                <td>In the program linking and binding process, they play an important role.</td>
                <td>Using them, you can build and deploy applications in a standard way as the framework already provides code to perform common tasks and uses code provided by a developer for custom functionality.</td>
            </tr>
            <tr>
                <td>Complexity</td>
                <td>Having a library means understanding the functionality of each method, and it isn’t easy to create complex interactions since you need to call many methods to get the desired results.&nbsp;</td>
                <td>Frameworks, on the other hand, embody the basic flow, and since plugins need to be added to code, it is easier to do the right modification.</td>
            </tr>
            <tr>
                <td>Extensibility</td>
                <td>Generally, libraries aren’t designed for extensibility; they are designed to accomplish a specific purpose.</td>
                <td>Frameworks provide general functionality. Because of this, they are built to be extensible, which allows developers to incorporate app-specific features without modifying the framework’s source code.</td>
            </tr>
            <tr>
                <td>Replaceable</td>
                <td>It is easy to replace a library with another library. For instance, if you do not like the jQuery date picker library, you can use another date picker like a bootstrap date picker or pick date.</td>
                <td>Frameworks are difficult to replace. If, for instance, you were using AngularJS to build your product, you cannot simply swap it out for another framework. It requires rewriting the entire codebase.</td>
            </tr>
            <tr>
                <td>Performance</td>
                <td>Less code is required to build libraries, which leads to faster loading times and better performance.</td>
                <td>Developing a framework requires a lot of coding, which increases loading times and decreases performance.</td>
            </tr>
            <tr>
                <td>Usage</td>
                <td>The purpose of libraries is to perform a defined and specific task. Eg: Image manipulation, network protocols, math operations, etc.</td>
                <td>Frameworks can be used for performing a wide range of tasks. Among these are Web application systems, plug-in managers, GUI systems, and so on.</td>
            </tr>
            <tr>
                <td>Existing Projects</td>
                <td>You can integrate libraries seamlessly into existing projects to add functionality.&nbsp;</td>
                <td>Incorporating frameworks seamlessly into an existing project is impossible. Instead, frameworks should be used when starting a new project.</td>
            </tr>
            <tr>
                <td>Benefits</td>
                <td>Good code quality, reusability, and control, enhanced speed and performance of the program, etc.</td>
                <td>Faster programming, support from the community, great support for MVC (Model View Controller) pattern, etc.</td>
            </tr>
            <tr>
                <td>Examples</td>
                <td>JQuery, React JS, etc.</td>
                <td>Spring, NodeJS, AngularJS, Vue JS, etc.</td>
            </tr>
        </tbody>
    </table>


## What is `CDN`? Why do we use it?
  - A `content delivery network (CDN)` refers to a geographically distributed group of servers that work together to provide fast delivery of Internet content.
  - The main use of a CDN is to <u style="color: Coral;">deliver content</u> through a network of servers in a <u style="color: Coral;">secure</u> and <u style="color: Coral;">efficient</u> way.


## Why is `React known as React`?
- `React` is named React because of its ability to `react to changes in data`.
- React is called React because it was designed to be a <u>declarative</u>, <u>efficient</u>, and <u>flexible JavaScript library</u> for building user interfaces.
- The name `React` was chosen because the library was designed to allow developers to `"react"` to <u style="color: Coral;">changes in state</u> and <u style="color: Coral;">data</u> within an application, and <u style="color: DodgerBlue;">to update the user interface</u> in a declarative and efficient manner.
- `React` is a `JavaScript-based UI development library`. `Facebook` and an `open-source developer community` run it.


## What is `crossorigin in script tag`?
- The `crossorigin` attribute sets the mode of the request to an HTTP CORS Request.
- Web pages often make requests to load resources on other servers. Here is where CORS comes in.
- CORS stands for `Cross-Origin Resource Sharing` and is used <u style="color: Coral;">to manage cross-origin requests</u>.
- A cross-origin request is a <u>request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain</u>.
  - ___Syntax___:
      ```sh
      <script crossorigin="anonymous|use-credentials">
      ```
- It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request.
- CORS allows servers to specify who can access the assets on the server, among many other things.
- > Note: 
  > - The opposite of cross-origin requests is `same-origin` requests.
  > - This means that a web page can only interact with other documents that are also on the same server.
  > - This policy enforces that documents that interact with each other must have the same origin (domain).
- See more info at: [web](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)

## What is difference between `React and ReactDOM`?
- `React` is a JavaScript library for building User Interfaces whereas `ReactDOM` is also JavaScript library that allows `React to interact with the DOM`.
- The react package contains `React.createElement()`, `React.Component`, `React.Children`, and other helpers related to elements and component classes.
  - We can think of these as the isomorphic or universal helpers that we need to build components.
- The react-dom package contains `ReactDOM.render()`, and in react-dom/server we have server-side rendering support with `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.


## What is difference between `react.development.js` and `react.production.js` files via `CDN`?
- `Development` is the stage of an application before it's made public while `production` is the term used for the same application when it's made `public`.
- `Development build` is several times (maybe 3-5x) `slower` than the `production build`.


## What is `async and defer`?
  - **`Async`**:
    - The async attribute is a `boolean attribute`.
    - The script is downloaded in `parallel(in the background)` to parsing the page, and `executed as soon` as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
    - ___Syntax___:
      ```sh
      <script src="demo_async.js" async></script>
      ```
  - **`Defer`**:
    - The defer attribute is a `boolean attribute`.
    - The script is downloaded in `parallel(in the background)` to parsing the page, and `executed after the page` has finished parsing(when browser finished DOM construction).
    - The `defer attribute` tells the browser `not to wait for the script`.
    - Instead, the browser will continue to process the HTML, build DOM.
    - ___Syntax___:
      ```sh
      <script src="demo_defer.js" defer></script>
      ```
    - Unless we're supporting ancient legacy systems, always add `type="module"` to all our script tags:
      ```sh
      <script type="module" src="main.js"></script> and place the tag inside <head>
      ```
      ```sh
      <script defer nomodule> can be used as a legacy fallback.
      ```
    - As the name suggests, it allows us to import `modules`, which makes it easier to organize our code.
    - Enable `strict mode` by default. This makes our code run faster, and reports more runtime errors instead of silently ignoring them.
    - Execute our code only after the DOM has `initialized`, which makes DOM manipulation easier. Thanks to this, we won't need to listen to `load/readystatechange/DOMContentLoaded events`.
    - Prevent top level variables from implicitly polluting the global namespace.
    - Allow us to use top-level await in supported engines.
    - Load and parse our code `asynchronously`, which improves load performance.
  - See More Detailed Info at:
    1. [web](https://javascript.info/script-async-defer) 
    2. [youtube](https://www.youtube.com/watch?v=IrHmpdORLu8)
