import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res=> res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json(); 
}

function App() {

  const postPromise = fetchPosts();

  const friendPromise = fetchFriends();

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick2 = () => {
    alert("I am clicked 2");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <h3>Vite + React</h3>

      <Players></Players>

      <Suspense fallback={<h3>Posts are coming...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => handleAdd5(12)}>Add 5</button>
    </>
  );
}

export default App;
