import React from 'react';

const Blog = () => {
    return (
        <div >
            <div className='text-4xl h-52 bg-violet-100 flex justify-center items-center font-bold m-auto'>Question section</div>  
            <div className='w-9/12 m-auto mt-10 flex flex-col gap-5'>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                When should you use context API?
                </div>
                <div class="collapse-content">
                    <p>Sharing data between components that are nested deeply in the component tree: If we have data that needs to be accessed by multiple components that are deeply nested in the component tree, using props to pass down the data can become hard. In such cases, using the Context API can simplify the process of sharing data.Context is primarily used when some data needs to be accessible by many components at different nesting levels.If we only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What is a custom hook?
                </div>
                <div class="collapse-content">
                    <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. In React, a custom hook is a function that allows us to reuse stateful logic between components. Custom hooks are functions that use other React hooks (such as useState, useEffect,  etc.) to provide a specific piece of functionality that can be used by multiple components. Custom hooks are similar to regular functions in that they can accept parameters and return values.Custom hooks are a powerful way to abstract logic that is commonly used in multiple components into a reusable function. For example, you could create a custom hook that handles form validation logic and can be used across different forms in our application.</p>
                </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What is useRef?
                </div>
                <div class="collapse-content">
                    <p>useRef is a hook in React that provides a way to create a mutable reference to an element or a value that persists between renders.The useRef hook can be used to: <br />
                        1.Access DOM elements: When we need to access a DOM element, we can use the useRef hook to create a reference to the element and then access it using the current property. For example, we might use useRef to get a reference to an input field so we can set the focus on it or get its value. <br />
                        2.Store mutable values: When we need to store a value that might change over time, we can use useRef to create a mutable reference to the value. Unlike state variables created with useState, changing the value of a useRef reference does not trigger a re-render of the component.</p>
                </div>
                </div>
                <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                What is useMemo?
                </div>
                <div class="collapse-content">
                    <p>useMemo is a React Hook that lets us cache the result of a calculation between re-renders.React has a built-in hook called useMemo that allows us to memoize expensive functions so that we can avoid calling them on every render. we simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;