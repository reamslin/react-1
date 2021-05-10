### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    React is a Javascript framework for building front-end applications.

- What is Babel?

    Babel is a compiler for Javascript

- What is JSX?

    JSX is an extension of Javascript syntax to include html-like syntax.

- How is a Component created in React?

    We have been writing components using functions. it should return an html object.

- What are some difference between state and props?

    Props are given to the component on instantiation and cannot change. State allows for data to persist and change through renders of the component.

- What does "downward data flow" refer to in React?

    This refers to passing along data/functions to child components.

- What is a controlled component?

    A controlled compnonent is one where React handles all changes.

- What is an uncontrolled component?

    An uncontrolled component's changes are controlled by the DOM.

- What is the purpose of the `key` prop when rendering a list of components?

    The key prop allows the ability to separate and controll different instances of a component.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    The order of the elements may change, and may cause issues.

- Describe useEffect.  What use cases is it used for in React components?

    useEffect allows for a component to perform a task upon certain events.
    One use case would be implementing a timer.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    useRef allows you to save a certain piece of data and have it persist across renders.
    It does not cause a rerender.

- When would you use a ref? When wouldn't you use one?

    You can use a ref when referencing a DOM object, or you would like to have a local variable. You should not use a ref for something that will be rendered on the page, as changes do not cause a rerender.

- What is a custom hook in React? When would you want to write one?

    A custom hook is a way to re-use logic from a component across multiple components. You would want to use one if the same logic will be used in multiple components, or just to clear up a component's logic.
