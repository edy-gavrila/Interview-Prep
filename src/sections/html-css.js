const htmlCss = {
  author: "Eduard Gavrila",
  articles: [
    {
      id: "001",
      category: "HTML & CSS",
      title: "Name some CSS properties",
      dateAdded: "12/01/2022",
      text: [
        "width, height, display, margin, padding, border, font-weight, font-size, border-top, position, visibility.",
      ],
    },
    {
      id: "002",
      category: "HTML & CSS",
      title: "display: none vs visibility: hidden",
      dateAdded: "12/01/2022",
      text: [
        "Display: none CSS declaration will hide an element from the viewport and will eliminate the space occupied by it as well. The element will still be in the DOM, just not visible.",

        "Display: hidden CSS declaration will make an element invisible as well while keeping the spate occupied by the element on the screen. The item will still occupy the same amount of screen area but will not be visible.",
      ],
    },
    {
      id: "003",
      category: "HTML & CSS",
      title: "CSS Terminology",
      dateAdded: "12/01/2022",
      text: [
        "A property is an aspect of an element which we can target in CSS using property names.",

        "A declaration is a property name - value pair.",

        "A rule is a ensemble of declarations taken together, usually under a CSS selector.",

        "A selector is a way of targeting different elements in order to apply a CSS rule set to it.",
      ],
    },
    {
      id: "004",
      category: "HTML & CSS",
      title: "The Data Attribute",
      dateAdded: "12/01/2022",
      text: [
        "The data attribute has been introduced in order to pass data from the HTML code into JavaScript and CSS, in a rigorous fashion. We can access the data from JavaScript by using the dataset property of a DOM node.",

        "Data attributes can be set in html using the format 'data-key'. Key names defined using a dash will be converted into camelCase in the DOM node.",

        "In CSS we can select elements by the data attribute like this: [data-key='someValue']. ",
      ],
    },
    {
      id: "005",
      category: "HTML & CSS",
      title: "Class vs Id",
      dateAdded: "12/01/2022",
      text: [
        "Class and id are both attributes we can set to an HTML element and we can select elements by them in CSS, as well as get them from the DOM in JavaScript.",

        "In CSS a class selector starts with a dot (.) and selects all the elements with that class. It is therefore used to apply the same CSS rule to multiple elements.",

        "The id selector starts with a hash (#) and is used to select a single element. An id should be unique.",
      ],
    },
    {
      id: "006",
      category: "HTML & CSS",
      title: "CSS Specificity and Precedence",
      dateAdded: "12/01/2022",
      text: [
        "CSS Specificity refers to which CSS rule applies to an element when it is selected using different selectors. There is a precedence that is loosely in line with the specificity of the selector.",

        "The order of specificity and precedence is as follows: Universal Selector (*), tag name selector (h1), class selector(.title), id selector (#id) and inline styles.",

        "The !important keyword overrides this specificity to take precedence.",
      ],
    },
    {
      id: "007",
      category: "HTML & CSS",
      title: "Responsive Web Design",
      dateAdded: "12/01/2022",
      text: [
        "Responsive Web Design is referring to building a single application to work nicely on multiple device types with different screen sizes. Our CSS styles will have to change depending on the screen size we address.",

        "One of the tools most used to achieve responsiveness are media queries. They enable us to change the styling  based on the screen width. We also have the grid system and flexbox, relatively new concepts that greatly ease making pages responsive.",
      ],
    },
    {
      id: "008",
      category: "HTML & CSS",
      title: "Box Model",
      dateAdded: "12/01/2022",
      text: [
        "The CSS Box Model is a concept which relates to how various CSS properties apply to an element. It is useful to imagine the HTML element as a box. Then on the boundary we have a border, outside of that border is a margin that pushes the element away from the other elements. Inside of the border there is a padding that pushes the child elements away from the edge of the element.",

        "Box model helps us simplify our thinking when we are trying to style components. It also shows in the chrome developer tools when we inspect an element.",
      ],
    },
    {
      id: "009",
      category: "HTML & CSS",
      title: "CSS Preprocessors",
      dateAdded: "12/01/2022",
      text: [
        "A CSS preprocessor is a program that lets you generate CSS from the preprocessor's unique syntax. Most preprocessors will add some features that do not exist in pure CSS such as mixin, nesting selector, inheritance selector, etc. These make the CSS structure more readable and easier to maintain.",
        "Example of preprocessors are SASS, LESS, PostCSS. ",
      ],
    },
    {
      id: "010",
      category: "HTML & CSS",
      title: "Pseudo-class",
      dateAdded: "12/01/2022",
      text: [
        "Pseudo-classes are additional selectors that help us select a special state of the selected element. The pseudo-class usually starts with a colon(:) followed by a name: :hover, :active, :nth-of-type(n)",
      ],
    },
    {
      id: "011",
      category: "HTML & CSS",
      title: "Pseudo-elements",
      dateAdded: "12/01/2022",
      text: [
        "Pseudo-elements are special selectors that refer to specific parts of an element. It is denoted by a double colon (::) followed by the name: ::before, ::after, ::first-letter.",
      ],
    },
    {
      id: "012",
      category: "HTML & CSS",
      title: "Semantic HTML",
      dateAdded: "12/01/2022",
      text: [
        "Semantic HTML is a feature introduced in HTML5 and consists of elements that have descriptive tag names, in order to make the elements relate to the content they hold and to be descriptive of the position in a web page. I makes the code cleaner, more readable, with improved SEO. It also makes the code more reusable and shareable.",

        "Where before div tags would have been used with descriptive ids, now we can use tags like '<header>, <main>, <nav>, <footer>, <aside>, <article>, <figure>,' etc",
      ],
    },
    {
      id: "013",
      category: "HTML & CSS",
      title: "The head tag",
      dateAdded: "12/01/2022",
      text: [
        "The head tag is an element that will not render on screen but is a container for elements like <title>, <meta>, <style>, <link> tags.",

        "It is basically used to store information about the webpage. The title shows on the title bar or tabs of the browser, meta holds information like keywords, the author, device information, etc. The style can holds CSS styles. the link holds identifiers for external or internal resources.",
      ],
    },
    {
      id: "014",
      category: "HTML & CSS",
      title: "Meta Tags",
      dateAdded: "12/01/2022",
      text: [
        "Meta tags are used inside the <head> tags and are used to provide or hold information about the web page. Things like the author, keywords for SEO, description, refresh time., viewport information",
      ],
    },
    {
      id: "015",
      category: "HTML & CSS",
      title: "Meta Tags",
      dateAdded: "12/01/2022",
      text: [
        "Meta tags are used inside the <head> tags and are used to provide or hold information about the web page. Things like the author, keywords for SEO, description, refresh time., viewport information",
      ],
    },
    {
      id: "016",
      category: "HTML & CSS",
      title: "Div vs Span",
      dateAdded: "12/01/2022",
      text: [
        "'Div' and 'span' are two types of container elements with one very important difference between them: 'Div' is a block level element, which means that a div will always be put on a new line. Span is a inline level element which means it will take as much space as it needs and can be placed on the same line as other inline elements or it can be shifted on a new line, depending on the spacing.",
      ],
    },
    {
      id: "017",
      category: "HTML & CSS",
      title: "Accessibility",
      dateAdded: "12/01/2022",
      text: [
        "Accessibility refers to making web pages as accessible as possible for persons with disabilities. It includes things like making sure the contrast is adequate for easy reading, the font size is sufficient, That images have alt text, that there are aria labels on elements, that the focus order when pressing tab is natural, that information for screen readers is present.",
      ],
    },
    {
      id: "017",
      category: "HTML & CSS",
      title: "Accessibility",
      dateAdded: "12/01/2022",
      text: [
        "Accessibility refers to making web pages as accessible as possible for persons with disabilities. It includes things like making sure the contrast is adequate for easy reading, the font size is sufficient, That images have alt text, that there are aria labels on elements, that the focus order when pressing tab is natural, that information for screen readers is present.",
      ],
    },
    {
      id: "018",
      category: "HTML Structure",
      title: "Accessibility",
      dateAdded: "12/01/2022",
      text: [
        "A HTML document will have a certain structure. First, it will have a doctype tag, the html tag, inside of which the head tag. Below head there will be a body tag, after which we can have one or more script tags. Script tags can be present in the head tags as well.",
      ],
    },
    {
      id: "019",
      category: "HTML Structure",
      title: "CSS Custom Properties",
      dateAdded: "12/01/2022",
      text: [
        "",
      ],
    },
  ],
};

export default htmlCss;
