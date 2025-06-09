import React, { useEffect, useRef, useState } from 'react'

export const Login = () => {
  const [login, setLogin] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Username = useRef();
  const Password = useRef();

  useEffect(() => {
    const storedLogins = localStorage.getItem('login');
    if(storedLogins) {
      setLogin(JSON.parse(storedLogins));
    }
  }, [])

  function handleAddClick(e) {
    e.preventDefault();
    console.log(Username.current.value);
    console.log(Password.current.value);
    if (username && password) {
      const newLogin = [...login, {username, password}];
      setLogin(newLogin);
      localStorage.setItem('login', JSON.stringify(newLogin));
      setUsername('');
      setPassword('');
      console.log(login);
    }
  }

  return (
    <div className='flex w-full justify-center '>
      <div className="mt-[100px] p-[10px] flex-center flex-col bg-blue/30 backdrop-blur-[2px] rounded-2xl">
        <h1 className='text-[60px] font-serif'>Login</h1>
        <div className="flex w-full item-center">
          <span className="borderLine"></span>
          <form className='flex flex-col items-center space-y-2' onSubmit={handleAddClick}>
            <h2 className='text-[25px]'>Sign in</h2>
            <div className="flex w-full h-fit justify-center items-center space-x-2">
            <input className='w-56 p-1 bg-amber-100/20 rounded-[5px] placeholder: text-black' placeholder='Username' ref={Username} value={username} onChange={(e) => setUsername(e.target.value)} type="text" required="required" />
            <span className='text-[20px]'>Username</span>
            <i></i>
            </div>
            <div className="flex w-full h-fit justify-center items-center space-x-2">
            <input className='w-56 p-1 bg-amber-100/20 rounded-[5px] placeholder: text-black' placeholder='Password' ref={Password} value={password} onChange={(e) => setPassword(e.target.value)} type="password" required="required" />
            <span className='text-[20px]'>Password</span>
            <i></i>
            </div>
            <div className="links">
              <a className='text-[25px]' href="#">Forget password?</a>
              <a className='text-[25px]' href="#">Sign up</a>
              </div>
              <input type="submit" value="login" />
          </form>
        </div>
      </div>
      
    </div>
  )
}


export default Login




