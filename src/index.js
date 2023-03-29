import React from "react";
import ReactDOM from "react-dom/client";

const BookList = () => {
    return <section></section>
}

const Book = () => {
    return <article>

    </article>
}
const Image = () => <h2>image placeholder</h2>
const Title = () => <h2>Book Title</h2>
const Author = () => {
    return <h4>Author</h4>
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>)


// Or use arrow function
// const Greeting = ()=> {
//     return <h2>My First Component</h2>
// }