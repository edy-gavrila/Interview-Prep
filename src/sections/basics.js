const basics = {
  author: "Eduard Gavrila",
  articles: [
    {
      id: "001",
      category: "JavaScript Basics",
      title: "JavaScript Data Types",
      dateAdded: "06/01/2022",
      text: [
        'JavaScript has a few data types. First, I would mention primitive data types such as boolean, which has only 2 values, true and false. Then there is the number type. Number type variables can be whole numbers or floating point numbers. Another primitive is "null" which is an empty, user assigned value. There is also "undefined" which any uninitialized variable holds. Also, not defined variables return "undefined"',

        "Non-primitive data types are basically objects. Here I want to mention arrays, that hold a collection of values of any type, strings that are basically special arrays of characters. Also we have the Object type that can have methods and properties.",

        "One more thing worth mentioning is that JavaScript is a weak typed programming language. That means that we do not have to declare the type of variable we are creating and that there are implicit type transformations when we operate on different types of data.",
      ],
    },
    {
      id: "002",
      category: "JavaScript Basics",
      title: "Const, Let and Var",
      dateAdded: "05/01/2022",
      text: [
        "Const, let and var are three ways to declare data in JavaScript. Const and let have been added in ES6 version of JavaScript. They were added as a way to fix a problem with var, namely that var had lexical scope and was being hoisted to the top of the file, even if it was used in a block scope. As a result you would get undefined if the value was used, even if the block of code that declared it, never run.The code would run differently than was written which could lead to some problems.",

        'To fix the problem described above, let and const were introduced. Using let, you can declare a variable on a block scope and it would not be accessible anywhere outside that scope. Const is similar, with the difference that if you declare primitive types, they can not be changed. Trying to change a const will result in an error. Any code linter like "eslint" you use will highlight this. Using const on reference types like arrays, strings and objects allows you to change the contents of the data references by the const but doesn\'t allow you to change the reference itself.',

        "One more thing to add, these days it is recommended to use const and let instead of var, so the code is more readable, consistent and free of hidden errors.",
      ],
    },
    {
      id: "003",
      category: "JavaScript Basics",
      title: "Pass by Value / Pass by Reference",
      dateAdded: "06/01/2022",
      text: [
        "There is a distinction about how we refer to variables in JavaScript. We can work with values or references. The value is the actual data that a variable holds. In contrast, the reference is a lot like the address in the memory that our variable occupies.",
        "Primitive data types like numbers are passed by value every time when we assign one variable to the other. Essentially we are making copies that will be completely independent of each other.",

        "When working with non-primitive data types like arrays of objects, the variable holds just a reference to the data, not the actual data. If we assign one variable to the other, we are duplicating the address to the data. If we make a change like pushing to a value to the array held by the first variable, the change will show on the second variable as well.",

        "To duplicate an array or an object, just assigning it to another variable won't do. We are just duplicating references. There are a few ways to achieve this with array and objects but the most straightforward is to use the spread (...) operator. We can use Array.map() or Array.concat() with arrays and Object.assign() with objects",

        "When working with different types of data, care must be taken so the variables are referenced properly as to what we intend to achieve. This is a common source of hidden errors for all programmers especially those who have limited experience.",
      ],
    },
    {
      id: "004",
      category: "JavaScript Basics",
      title: "map, filter, reduce",
      dateAdded: "06/01/2022",
      text: [
        "Map filter and reduce are methods of the Array object. So any variable that is an array will have them. They are what it is called higher order functions and are very powerful. When properly understood, they make working with arrays a much more pleasant experience. ",

        "Map is used to create an array from another array. Each element of the old array is passed to map, transformed in some way and then pushed into the new array. Most commonly, map() takes two arguments: the current value to be worked on and a function the receives that current value, does something with it and returns a new value. The returned value will be pushed into the new array.",

        "Filter is used to filter out array elements based on some criteria. Like map, filter takes the current value and a function as arguments. This time the function must return true or false, based on the current value that was passed to it. If it returns true, the current value is pushed into the new array. Otherwise, the value is skipped.  ",

        "Reduce is a slightly more complex function and can be thought of as a more general variant of map and filter. That is to say you can implement map and filter using reduce, as well as any combination of the two. Reduce takes as arguments an accumulator, to store the result of previous iterations, a current value, a function and an initial value for the accumulator. During each iteration, the value the function returns is stored in the accumulator. If the accumulator is of reference type, the function must return the accumulator itself. One simple example of using reduce is to calculate the sum total of the values of an array.",
      ],
    },
    {
      id: "005",
      category: "JavaScript Basics",
      title: "Truthy/Falsy Values",
      dateAdded: "06/01/2022",
      text: [
        "A truthy value is any value that evaluates to true in a logical expression in JavaScript. A falsy value is, you guessed it, a value that evaluates to false.",

        'There  are 6 values that evaluate to false and therefore are falsy: null, undefined, NaN, 0, "", false. All the other values are truthy. ',

        "A special case is NaN. When explicitly compared, it doesn't equal to false, so NaN === false is false and not even to itself, so NaN === NaN is false too.",
      ],
    },
    {
      id: "006",
      category: "JavaScript Basics",
      title: "this",
      dateAdded: "07/01/2022",
      text: [
        "This is a special keywork in JS. It allows us to access the current context we find ourselves in. For example, on the top level, 'this' refers to the window object. Another example would be a method within an object. By using 'this', the method can access the object it resides in, its properties and methods.",

        "Care must be taken when using 'this' because it can refer to different objects, depending on who calls the function that uses 'this'. In JavaScript this usually refers to the context from which the function is called. So if we call a method of an object from within another object, 'this' in that function now refers to the calling object, not the original object. We can change this behaviour by using a special function, namely \"bind\" to explicitly attach the 'this' object that we want, like this: someFunction.bind(this);.",

        "Another special case is when using arrow functions. Arrow functions keep the original context in which they were declared an when called. 'This' refers to that original context, not the new context from which the arrow function is called.",
      ],
    },
    {
      id: "007",
      category: "JavaScript Basics",
      title: "== vs ===",
      dateAdded: "07/01/2022",
      text: [
        "In JavaScript we have two types of the equality operator: '==' and '==='.The difference between them is often a source of confusion and using the wrong one in some situations can lead to hidden bugs.",

        "To put it shortly, '===' checks for type and value while '==' checks for value only. To be able to do its thing, '==' performs an implicit type conversion. For example, 5 == '5' expression evaluates to true, but first JS converts the number 5 to a string and then it checks for equality. The '===' doesn't perform any type conversion and therefore both type and value have to match for the expression to evaluate to true. The '===' operator is also called 'strictly equals' while '==' is called 'loosely equals'.",

        "It is considered good programming practice to use '===' to check for both type and value because it eliminates the possibility of some hidden bugs.",
      ],
    },
    {
      id: "008",
      category: "JavaScript Basics",
      title: "Type Coercion",
      dateAdded: "07/01/2022",
      text: [
        "Type coercion refers to transforming a variable of a type into another type, for example the number 5 into the string '5'. It can be implicit and explicit.",

        "Implicit conversion happens when we have an expression containing data of different types, like 2 + 3 + '5'. I is implicit because it is performed behind the scenes when the code is run. Care must be taken when using this type of expressions because it can easily lead to unexpected results.",

        "The other type conversion is explicit, meaning we tell JavaScript to the conversion for us. To perform an explicit conversion we use an expression like stringVal = String(numberVal);",
      ],
    },
    {
      id: "009",
      category: "JavaScript Basics",
      title: "typeof keyword",
      dateAdded: "07/01/2022",
      text: [
        "The 'typeof' keyword is used to check the type of a variable. For example 'typeof 42;' will evaluate to 'number'.",

        "A few gotchas would be that 'typeof NaN' evaluates to 'number', and 'typeof undefined' evaluates to 'undefined'. the type of null is 'object'. Depending on the environment we run our code in, using typeof on strings and arrays will return either 'string' and 'array' or 'Object'.",
      ],
    },
    {
      id: "010",
      category: "JavaScript Basics",
      title: "delete keyword",
      dateAdded: "07/01/2022",
      text: [
        "The 'delete' keyword is used to delete a property of an object, for example 'delete someObj.someProp'. It removes the referenced property for the object.",

        "It is not considered good practice to use the delete keyword except in some controlled circumstances because it can break the data model for your application and can introduce errors in far away places in your code. ",

        "A delete expression will return 'true' if the delete was successful and 'false' if not.",
      ],
    },
    {
      id: "011",
      category: "JavaScript Basics",
      title: "Object Notation",
      dateAdded: "07/01/2022",
      text: [
        "Object notation refers to how we can access a property of an object. There are two different ways, dot notation and bracket notation.",

        "With dot notation we access a property like this: object.property. We use the name of the object followed by dot ,'.' followed by the name of the property. Dot notation is a bit stricter in the sense that we can use variables for the property name. Linters often prefer this type of notation, because of its strictness.",

        "Bracket notation uses square brackets instead of the dot and inside the brackets we use either a string or a string variable for the property name . It is less strict because we can define property names containing spaces or special characters, etc.",
      ],
    },
    {
      id: "012",
      category: "JavaScript Basics",
      title: "Strict Mode",
      dateAdded: "10/01/2022",
      text: [
        "Strict mode is a directive you can use with JavaScript. To enable it', you just have to put 'strict mode' at the top of your file. You can also enable it in a block scope if required to have a more limited action. It was required to enable a more stricter environment in which programmers could not abuse certain features of JavaScript. It is somewhat obsolete with the advent of linters that gives the programmers plenty indications on how to write better code.",

        "In strict mode, there are a few things that change regarding what are we allowed to do. Firstly, we can not define global variables. We have this situation when we forget to use var, let or const when defining a variable. JavaScript will just define it for us on the global scope. Use strict disables that, so we get an error. ",

        "Another effect of using 'use strict' is that we can not use the delete keyword to delete variables or object properties. ",
      ],
    },
    {
      id: "013",
      category: "JavaScript Basics",
      title: "Anonymous Functions",
      dateAdded: "10/01/2022",
      text: [
        "An anonymous function is a function for which we do not explicitly define a name. Instead we assign that function directly to a variable or passing it immediately as a parameter to another function.",

        "We define anonymous functions in the same way as regular functions, but without a name: 'function() {...}'. Because you don't assign a name, the only way to reference it is by assigning it(actually its reference) to a variable or passing it as a parameter.",

        "They are useful because it makes the code a bit shorter, where a function name is not necessary.",
      ],
    },
    {
      id: "014",
      category: "JavaScript Basics",
      title: "Callbacks",
      dateAdded: "10/01/2022",
      text: [
        "Callbacks is a mechanism in JavaScript that allows the programmer to set up code to be use at a later time, for example when an event is triggered, like a click on a button. The way to use callbacks is to define a function and pass it as a parameter to another function (sometimes called a higher order function), to be 'called back' when necessary.",

        "Callbacks can be defined in all the way you define a function: inline, assignment to variable, arrow function, anonymous definition.",

        "Callbacks can sometimes be overused, a situation called 'callback hell'. To get around that, we can use asynchronous code, like Promises",
      ],
    },
    {
      id: "015",
      category: "JavaScript Basics",
      title: "Closures",
      dateAdded: "10/01/2022",
      text: [
        "Closure is a term that in JavaScript refers to a function and the scope it is in, taken together. When a function is defined it has access to the variables inside it but also to all the variables of the context surrounding it, all the way to the top. So it captures the surrounding context at the moment of its creation.",

        "Closures are useful in many ways, one of the most important is to simulate encapsulation in the OOP sense. You can do that by creating a function that returns another function. Only the  returned function has access to all the variables declared inside the outer function, therefore achieving encapsulation.",
      ],
    },
    {
      id: "016",
      category: "JavaScript Basics",
      title: "Naming Conventions",
      dateAdded: "10/01/2022",
      text: [
        "Programming languages have generally a way of naming variables and a certain format for the name. In JavaScript The format is camelCase and the way of naming variables and functions is as follows: ",

        "Firstly, the name has to be descriptive about what it refers to, to make the code easier to read. For example, Boolean variables are prefixed by 'is', or 'has' and then what it refers to: 'hasProperty', 'isInDarkMode'. Getter and setter methods can be prefixed by 'get' and 'set' followed by what variable it sets: 'getCounter', 'setPlayerName'. Functions  are usually prefixed by a descriptive verb: 'doSomeWork()', 'sendDataToDatabase()', 'authenticateUser()'. Constants can be capitalised and use underscore between words.",
      ],
    },
    {
      id: "017",
      category: "JavaScript Basics",
      title: "Ways of emptying arrays",
      dateAdded: "10/01/2022",
      text: [
        "There a few ways to empty an array. Firstly you can reassign it to an empty array. However, this will not be an option if the array is set as a constant. Secondly you can set its length to 0. This is allowed in JavaScript. Third option is to use the splice method with the first argument as 0 (splice on 0).",

        "You can also use a for loop or  wile loop to pop or shift the arrays, as long as the length is greater than 0.",
      ],
    },
    {
      id: "018",
      category: "JavaScript Basics",
      title: "MUL Function",
      dateAdded: "10/01/2022",
      text: [
        "MUL function refers to calling a function with multiple parameters, each surrounded by its own parenthesis. It is used when we have a function that returns another function that return another function an so on, in a nested like fashion.  It is closely related to closures as each nested function has access only to the functions above it.",

        "We call the top function with each parameter surrounded by parenthesis, and each parameter will be passed to the nested functions in order. The last parameter will be passed to the innermost returned function, and so on all the way to the top calling function.",
      ],
    },
    {
      id: "019",
      category: "JavaScript Basics",
      title: "Create Array",
      dateAdded: "10/01/2022",
      text: [
        "There are a few ways to create an array. Firstly, you can initiate a variable with an empty array by setting it to a pair of square brackets. Also, you can create it from another array using the built-in functions 'map', 'filter' and 'reduce'(yes, you can return an array using reduce). Another way is to use the Array() constructor, although it is considered bad practice and better to be avoided.",
      ],
    },
    {
      id: "020",
      category: "JavaScript Basics",
      title: "Undefined and Null",
      dateAdded: "10/01/2022",
      text: [
        "Undefined and null are both referring to empty variables. The distinction is that undefined refers to a variable that has never been assigned or doesn't exist even. Null is a assigned value, explicitly by the programmer. When we have a null value, we know that it has  intentionally been set to null. ",
      ],
    },
    {
      id: "021",
      category: "JavaScript Basics",
      title: "Instanceof",
      dateAdded: "10/01/2022",
      text: [
        "The 'instanceof' keyword checks if a variable is an instance of an certain object. It checks whether the prototype of a constructor appears anywhere in the prototype chain of an object.",

        "Care must be taken when using 'instanceof' because we can get unexpected results sometimes. For example, testing a literal string with 'instanceof String' will return false. Also, 'instanceof Object' returns true for classes",
      ],
    },
    {
      id: "022",
      category: "JavaScript Basics",
      title: "IIFE",
      dateAdded: "10/01/2022",
      text: [
        "IIFE, or immediately invoked function expression, is a anonymous function that is immediately invoked. It can be used to encapsulate a portion of code that runs immediately after being declared. It was popular with jQuery users. Also can be used to define modules",

        "IIFE can also be used to perform initializations in a closed scope and then return the result, without the rest of the code having access to any of the internal workings.",
      ],
    },
    {
      id: "023",
      category: "JavaScript Basics",
      title: "Maintaining State & Local Storage",
      dateAdded: "10/01/2022",
      text: [
        "There are a few ways to persist data  in an web application. U can use cookies, you can use 'local storage' or 'session storage'",

        "You can use localStorage object in JavaScript to set items of data or get those items. The data in local storage will persist, even if the browser window is closed. All data has to be in string format so objects have to be 'stringified'. Session storage is similar to local storage but the data will be deleted when a session is closed, i.e. when browser window is closed.",
      ],
    },
    {
      id: "024",
      category: "JavaScript Basics",
      title: "HTML 5 APIs",
      dateAdded: "10/01/2022",
      text: [
        "There are a lot of built-in features in most of the modern browsers that are generally known as API's. Some of them are the Web Storage API, the Geolocation API, the DOM API, Drag and Drop API, History API, Bluetooth API and many more.",

        "There are also a wealth or third party APIs for every subject under the Sun. Weather APIs, Social Media APIs like Twitter API, Movie APIs, Flight Information APIs, etc, etc.",
      ],
    },
    {
      id: "025",
      category: "JavaScript Basics",
      title: "Object and Array De-structuring",
      dateAdded: "11/01/2022",
      text: [
        "Object and Array de-structuring are, together with  the spread operator, some of the most important additions in ES6. It allows the programmer to write more clean, maintainable code, and greatly eases working with objects and arrays.",

        "De-structuring is a short-hand notation for extracting values from an object or  array into variables. ",

        "The syntax for array de-structuring is something like this: 'const [v1, v2, v3] = ourArray;' What this line of code does is taking the values from the array in the order of their index and assigning them to the newly created variables 'v1', 'v2', 'v3'.",

        "For objects, de-structuring works similarly, with the exception that we have to supply the object key names as the name of the variables, like this: 'const {name, age, email} = personInfo;' where 'personInfo' is an object. You can also supply aliases to assign different names to the variables, like in the last ",

        "De-structuring is a very important feature in ES6, something I personally use every day and using it makes the code shorter, more readable and easier to maintain.",
      ],
    },
    {
      id: "026",
      category: "JavaScript Basics",
      title: "Rest and Spread Operators",
      dateAdded: "11/01/2022",
      text: [
        "'Spread' and 'rest' operators are more important features introduced in the ES6. 'Rest' is used less often but the 'spread' operator is something that will be used every day. Both are denoted by three dots added in front of a variable, typically an array or object.",

        "The 'rest' operator is used in the context of passing arguments to a function. It organizes a unknown number of passed arguments into an array. Before the rest operator, We would have to work with the arguments object passes to every function, when having a unknown number of arguments passed. With the rest operator we can create an array of arguments directly from the passed arguments like this: 'function foo(...args){ args.forEach(arg, () => {//do something amazing})}'. Some developers do not like to use the rest operator as the need for using it might show that the code not  robust enough.",

        "The spread operator is a very useful feature introduced in ES6 that allows us to unwrap an array of object, to be included as part of another array or object. It makes copying arrays or objects extremely easy: const firstObj = {//some properties}; secondObj = {...firstObj, //some additional properties}. Now the second object contains all the values contained in the first object. Spread operator is something I am a big fan of and find myself using it every time I work with arrays or objects.",
      ],
    },
    {
      id: "027",
      category: "JavaScript Basics",
      title: "Arrow Functions",
      dateAdded: "11/01/2022",
      text: [
        "Arrow functions are another one of the most important features in ES6.Firstly, it provides an alternative, terser way of defining a function. This is important when writing code with lots of callbacks such as setting event listeners to DOM elements or when working with asynchronous code. ",

        "Another important aspect of arrow functions is different behaviour with regard to the 'this' keyword. Arrow functions keep their original context in which they were defined when reference it through 'this'. This is in opposition with normally defined functions where the context changes, depending on where de function is called.",

        "You can define an arrow function like this: 'const doSomething = () => {//some useful work};' It has to be assigned to a variable or passes as an argument to another function. If the function has only one line of code, the curly brackets can be omitted. Also the return keyword can be omitted for a single line function. I implicitly return whatever the value of the one line expression is. For functions with one parameter, event the braces can be ommited, like this: 'arg => arg + 1'. This function takes an argument, adds 1 and returns the result. ",
      ],
    },
    {
      id: "028",
      category: "JavaScript Basics",
      title: "NaN",
      dateAdded: "11/01/2022",
      text: [
        "'NaN' is a special type in JavaScript and it is return when there is a operation with number that goes wrong and JavaScript is not able to carry out that operation. Example are 0 / 0, trying to divide by a string, conversion from string to number, etc. Any incompatible operation where a number is involved will result in 'NaN', being returned.",
        "When using typeof on 'NaN', the result will be number. However, 'NaN' will not be equal with anything, including itself, so 'NaN === NaN' is false.",
      ],
    },
    {
      id: "029",
      category: "JavaScript Basics",
      title: "Undeclared vs Undefined",
      dateAdded: "11/01/2022",
      text: [
        "A undeclared variable is a variable that has not been declared anywhere in our code and therefore does not exist. When trying to reference an undeclared variable, we generally get an 'ReferenceError'.",

        "An undefined variable is a variable which has been declared, but it has not been initialised yet. Right after declaration, a variable is undefined. As soon as we assign it a value it will not be undefined anymore.",

        "Inexistent properties of existing objects return undefined as well, so care must be taken when referencing object properties.",
      ],
    },
    {
      id: "030",
      category: "JavaScript Basics",
      title: "DOM Selectors",
      dateAdded: "11/01/2022",
      text: [
        "There are a few ways to select a DOM element in JavaScript. We can select elements by their id with 'document.getElementById()'. We can select elements by class name with 'document.getElementsByClassName()', or by tag name with 'document.getElementsByTagName()'. We also have 'document.querySelector()' and 'document.querySelectorAll()'. Both of these select elements by a CSS selector and are notably slower than the previous methods.",
      ],
    },
    {
      id: "031",
      category: "JavaScript Basics",
      title: "Copy Objects",
      dateAdded: "11/01/2022",
      text: [
        "Copying objects can be tricky, because in JavaScript they are reference types so a if to a variable it's assigned an object, the variable will hold a reference to the address in memory where the object is stored. If we copy the variable, we just end up duplicating the reference so both variable will point to the same object. Any change made using one variable will reflect in the other variable as well.",

        "To make a 'deep copy' of an object, several ways are available. Firstly, you can 'stringify' the object and then parse it back using JSON methods. Secondly, you can use the spread operator: Create an empty object and then spread the object to be copied inside. Thirdly, you can use Object.assign() method, with an empty string and the object to be copied as parameters.",

        "There is another way, namely to recursively parse the object and construct another object using a dedicated function.",
      ],
    },
    {
      id: "032",
      category: "JavaScript Basics",
      title: "Compare Two Objects",
      dateAdded: "11/01/2022",
      text: [
        "Comparing two objects, assuming that we have two separate objects, is somewhat involved. We have to check that the objects have the same keys and the same values. One method would be to 'stringify' them and compare the resulting strings. This will work with one important caveat: The keys have to be in the same order.",

        "Another method of comparing objects is to build a function that recursively iterates through all the properties and compares them against the other object. This function will get exponentially more complex as we try to tackle more and more corner cases.",
      ],
    },
    {
      id: "033",
      category: "JavaScript Basics",
      title: "Service Workers",
      dateAdded: "11/01/2022",
      text: [
        "Service workers are scripts that run in the background, separate from the main web page. They allow features that makes the web app feel more like a native application, like responsiveness, offline mode, caching of resources",

        "Service workers are very useful when trying to enhance user experience, cache resources, push notifications. It uses promise heavily. Service workers have an installation process or registration,  that needs to be done from the web page JS code.",
      ],
    },
    {
      id: "034",
      category: "JavaScript Basics",
      title: "removing Duplicates",
      dateAdded: "11/01/2022",
      text: [
        "There are a few ways which we can go about removing duplicates from an array. Firstly, we can create a new set using the array as a source and that will automatically include only unique values. Then we can convert the set back to an array, if required.",

        "Another option will be to iterate through the array and construct another array out of values that have not already been pushed to that array. In other words, for each element of the source array, we test if the destination array includes the element already and if not, we push it to the destination. Otherwise we ignore it.",
      ],
    },
  ],
};

export default basics;
