import './App.css'
import Batsman from './Batsman';
import Counter from './Counter';

function App() {

  function handleClick(){
    alert('I am clicked');
  }

  const handleClick2 = () =>{
    alert('I am clicked 2');
  }

  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>      
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=> handleAdd5(12)}>Add 5</button>
    </>
  )
}

export default App
