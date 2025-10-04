/**
 * Components
 * Jsx
 * Props
 * State
 * Events
 * Conditional Rendering
 */

/**
 * 1. Api
 */

/**
 * 1. just write a simple fetch with json conversion.
 * 2. Wrap the data loading components under suspense.
 */

fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())
.then(data => console.log(data))

const loadData = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = res.json();
    return data;
}
