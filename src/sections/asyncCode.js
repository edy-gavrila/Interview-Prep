const asyncCode = {
  author: "Eduard Gavrila",
  articles: [
    {
      id: "001",
      category: "Async JavaScript",
      title: "HTTP Methods",
      dateAdded: "11/01/2022",
      text: [
        "'HTTP Methods' refers to the main http request types we can use. There is a 'GET' request that is used to fetch something from a server, usually some data or resource.",

        "Another request type would be 'POST' that is used to replace some data in our server.",

        "There is also a 'PUT' request that is use to update some part of the data model, but not all of it.",

        "The last important one is the 'DELETE' request which we would use to delete some data in our data model.",

        "We usually use these network requests through an API like the native 'fetch API' or a third party one like 'axios'. Except GET, all other request types needs a options object to be passed in which we set some headers and we set the data to be passed to the server as well.",
      ],
    },
    {
      id: "002",
      category: "Async JavaScript",
      title: "HTTP Status Codes",
      dateAdded: "11/01/2022",
      text: [
        "Status codes are responses we get from the network after we attempt to do a network operation. They are 3 digit numbers, There are five main groups of status codes. They begin respectively with 1, 2, 3, 4, 5. ",

        "100 level status codes are information codes. 200 status codes are codes confirming an operation was successful. 300 level status codes indicate a redirect, meaning that the user request has been redirected, for different reasons. 400 level status codes refer to an error on the client side like, for example, trying to access a resource that doesn't exist or not having enough credentials to access a certain resource. 500 level status codes are the ones that indicate a server error.",
      ],
    },
    {
      id: "003",
      category: "Async JavaScript",
      title: "REST",
      dateAdded: "12/01/2022",
      text: [
        "REST refers to a series of architecture patterns that are use to build a back-end API. An API is a group of function calls or network request that provide a service or resource to the calling application.",

        "RESTful APIs have to follow a series of 6 design principles: 1. Uniform Interface. 2. Client-Server decoupling. 3. Statelessness. 4. Cacheability. 5. Layered Architecture. 6. Code on Demand(optional).",

        "As a front-end engineer, things to know are versioning, nouns, URI structure.",
      ],
    },
    {
      id: "004",
      category: "Async JavaScript",
      title: "Synchronous vs Asynchronous",
      dateAdded: "12/01/2022",
      text: [
        "Synchronous code is code that executes line by line, in the order it was written, taking into the account any loops and function calls that we might have. If a certain bit of code takes a lot of time to execute, the whole running of the application is blocked until in finishes. This can lead to a bad  user experience. Here is where asynchronous code comes in handy.",

        "Async code is code that will usually take some time to execute and it is set to work in the background, like on another thread (even though JavaScrip is single threaded.), while the other code keeps running as usual. Example of code that take a lot of time to finish would be network requests to a database or API, timers, computational expensive code.",

        "Async codes is implemented in JavaScript with the help of objects named Promises. A promise will run code in the background and return something when it is either resolved or rejected. Another way would be to set a timer that will execute a function after a certain amount of time has passes, without blocking the normal executing of the code.",
      ],
    },
    {
      id: "005",
      category: "Async JavaScript",
      title: "SetTimeOut & SetTimeInterval",
      dateAdded: "12/01/2022",
      text: [
        "These are two functions with which you can run some code after a certain amount of time has passed. They are asynchronous which means they will not block the normal running of the entire script.",

        "They both take a function, an amount of time in milliseconds and additional parameters to be passed to the function. After the set amount of time has passed, the code will be executed. The maximum amount of time from calling to the execution of the callback is not guaranteed, due to how async code works in JavaScript.",

        "The only difference between 'setTimeOut' and 'setInterval' is that setInterval will keep re-running the callback every 'x' milliseconds where 'x' is the time set, until it is cleared. To clear a 'setInterval', first a reference of it must be saved in a variable. Then we can pass that variable to globally available 'clearInterval'.",
      ],
    },
    {
      id: "006",
      category: "Async JavaScript",
      title: "Promises",
      dateAdded: "12/01/2022",
      text: [
        "A promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. It can be thought of as a placeholder for a  value that will resolve after some time.",

        "A promise can be in one of the following states: pending, fulfilled or rejected. We can assign different code to be executed, depending on the state of the promise.",

        "Most network calls return a promise so when working with APIs a good handle on how promises work is essential."

      ],
    },
    {
      id: "007",
      category: "Async JavaScript",
      title: "Async / Await",
      dateAdded: "12/01/2022",
      text: [
        "Async/await are a new concept introduced in ES6. They make working with promises a lot easier, by avoiding callback chaining typically used with promises - 'promise.then(callback).then(anotherCallback)...'. It is syntactic sugar on top of promises but can make the code much more readable.",

        "The way it works is like this: Firstly, we put the keyword async in front of a function definition and that will make the function return a promise. This means that the function runs now asynchronously. Inside the function we use the keyword await for any statements that return a promise as well. Eventually, we will get the resolved (or rejected) value which we can use immediately. If our async function has to return a value, in the outside scope, we can use it with .then() blocks   to do something  once the return value has been resolved, in a hybrid approach.",

        "I is a good idea to wrap the code inside the async function  in try - catch blocks as we don't have the .catch() functionality anymore.",
      ],
    },

  ],
};

export default asyncCode;
