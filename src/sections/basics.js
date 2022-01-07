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

        'To fix the problem described above, let and const were introduced. Using let, you can declare a variable on a block scope and it would not be accessible anywhere outside that scope. Const is similar, with the difference that if you declare primive types, they can not be changed. Trying to change a const will result in an error. Any code linter like "eslint" you use will highlight this. Using const on reference types like arrays, strings and objects allows you to change the contents of the data references by the const but doesn\'t allow you to change the reference itself.',

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
        "This is a special keywork in JS. It allows us to access the current context we find ourselves in. For example, on the top level, 'this' refers to the window object. Another example would be a method within an object. By using 'this', the method can access the object it resides in, its properties an methods.",

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
  ],
};

export default basics;
