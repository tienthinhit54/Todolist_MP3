import { useState } from "react";



function App() {
  const [word, setWord] = useState('');
  const [todos, setTodos] = useState([]);
  const handleAdd = ()=>{
    setTodos(prev =>[...prev, word])
    setWord('')
  } 
  return (
    <div className="flex flex-col gap-8 h-screen items-center border border-red-500 justify-center">
      <div className='flex gap-8'>
      <input
        type="text"
        className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
        value={word} 
        onChange={e => setWord(e.target.value)} 
        ></input>
        <button
        type="button"
        className="outline-none px-4 py-2 bg-blue-500 rounded-md"
        onClick={handleAdd}
        >Add</button>
      </div>
      <div>
        <h3 className='font-bold text-xl'>Content: </h3>
        <ul>
          {todos?.map((item, index) => {
            return(
              <li key={index}>
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
