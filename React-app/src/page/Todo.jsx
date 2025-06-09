import React, { useEffect } from 'react'

export const Todo = () => {
  const [todos, setTodos] = React.useState([] || null);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

useEffect(() => {
  setTimeout(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
      setIsLoading(false);
    }else {
      setTodos([]);
    }
  }, 1500);
}, [todos])

function handleAdd(e) {
  e.preventDefault();
  if(input) {
    const newTodo = [...todos, input];
    setTodos(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
    setInput('');
  }
}

function handleDelete(index) {
  const updatedTodo = todos.filter((_, i) => i !== index);
  
  setTodos(updatedTodo);
  localStorage.setItem('todos', JSON.stringify(updatedTodo));
}
function handleDeleteAll() {
  const updated2Todo = todos['romoved'];
  
  setTodos('');
  localStorage.setItem('todos', JSON.stringify(updated2Todo));
}
  return (
    <>
      <div className='bg-todo flex flex-col items-center transition duration-1 '>
        <div className="mt-[100px] p-[10px] flex-center flex-col bg-white/10 backdrop-blur-[2px] rounded-2xl transition animate-bounce(linear_1s) delay-[1.5s] ">
          <div className="w-full h-fit flex flex-col items-center p-1">
            <h1 className='my-2 text-[60px] todo-title font-bold'>Todo~List</h1>
              <form className='pt-2 flex' onSubmit={handleAdd}>
                <input type="text" className='w-[250px] py-1 pl-2 bg-[#fff] capitalize rounded-[5PX] text-2xl placeholder: text-gray-900' placeholder='Insert Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
                <button className='mx-2 p-1 text-amber-50 font-bold bg-[#020024] rounded-[5px]'>Add</button>
              </form>
          </div>
            {isLoading && <div className="loader"></div>}
            <div className="w-[400px] p-3 mt-3 flex flex-col items-center  bg-white/10 backdrop-blur-[20px] rounded-2xl">
              {todos.length === 0 ? (<p>No todos found</p>) : (todos && todos.map((todo, index) => (
                <div key={index} className="w-full my-1 p-2 flex justify-between items-center bg-[#020024] rounded-[10px]">
                  <h1 id='todoId' className='mr-7 text-[30px] capitalize font-bold text-[#ffffff]'>{index + 1}: {todo}</h1>
                  <div className="flex justify-center items-center space-x-3">
                    <input type="checkbox" className="w-7 h-7 p-5 text-emerald-60 accent-green-700" onClick={() => {
                      document.getElementById('todoId').classList.toggle('line-through');}}/>
                    <button className="h-fit p-0.5 bg-amber-100 rounded-[5px] hover:bg-black" onClick={() => handleDelete(index)}>❌</button>
                  </div>
                </div>
              ))) || null}
              {todos.length > 0 &&
                <button className="w-fit h-fit mt-2 p-1 flex justify-center items-center" onClick={() => handleDeleteAll()}>
                  <img className='w-10 h-10' src="delete.png" alt="" />
                </button> || null}
        </div>
        
        </div>
      </div>
    </>
  )
}
