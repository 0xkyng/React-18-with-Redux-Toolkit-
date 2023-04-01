import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
    return <section className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/> 
    </section>
}

const Book = () => {
    return <article className="book">
        <img src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/714Da0RQA5L._AC_UL600_SR600,400_.jpg" 
        alt="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"/>
        <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>
        <h4>James Clear </h4>
        
    </article>
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


// Or use arrow function
// const Greeting = ()=> {
//     return <h2>My First Component</h2>
// }