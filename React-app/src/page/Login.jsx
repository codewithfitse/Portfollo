import React, { useEffect, useState } from "react";
import { Header } from "../componets/Header";

const Login = () => {
  const [login, setLogin] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedLogins = localStorage.getItem("login");
    if (storedLogins) {
      setLogin(JSON.parse(storedLogins));
    }
  }, []);

  function handleAddClick(e) {
    e.preventDefault();
    if (username && password) {
      const newLogin = [...login, { username, password }];
      setLogin(newLogin);
      localStorage.setItem("login", JSON.stringify(newLogin));
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4 background overflow-hidden">
      <Header />
      <div className="bg-zinc-900 p-6 mt-10 lg:mt-2 rounded-xl max-w-sm w-full space-y-6 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold">Create an account</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Enter your email below to create your account
          </p>
        </div>

        <div className="flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700">
            {/* GitHub Icon */}
            GitHub
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 bg-zinc-800 text-white px-4 py-2 rounded-md hover:bg-zinc-700">
            {/* Google Icon */}
            Google
          </button>
        </div>

        <div className="text-center text-xs text-zinc-400">
          OR CONTINUE WITH
        </div>

        <form className="space-y-4" onSubmit={handleAddClick}>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="fitse@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder=". . . . . . ."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-zinc-200 transition"
          >
            Create account
          </button>
        </form>
      </div>

      <div className="mt-6 bg-zinc-900 p-4 rounded-xl w-full max-w-sm flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
            F
          </div>
          <div>
            <div className="font-semibold">Fitsum Zerihun</div>
            <div className="text-sm text-zinc-400">fitse@example.com</div>
          </div>
        </div>
        <button className="text-white text-2xl leading-none">+</button>
      </div>
    </div>
  );
};

export default Login;
