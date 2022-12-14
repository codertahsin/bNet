import { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { HiOutlineLogout } from 'react-icons/hi';
import logo from "./image/loader.gif"

import { auth } from "./utils/firebase"


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) return setUser(null);
      setUser({
        ...authUser?.providerData[0]
      });
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
    <div className="bg-gray-500 h-full">
    <div className="max-w-md mx-auto bg-gray-500 p-1 h-full flex flex-col">
      <h1 className="text-center font-thin text-green-500 text-2xl">bNet</h1>
      <div className="flex items-center justify-between mb-5 border-b py-2">
        <h3 className="text-base font-san">Hello, My dear bingo people</h3>
        {user && (
          <button
            type="button"
            className="flex items-center justify-center text-green-300 font-semibold p-3 border border-transparent text-sm  rounded-md  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
            onClick={() => auth.signOut()}
          >
            <HiOutlineLogout size={25}/>
          </button>
        )}
      </div>
      <img className="w-16 mt-[-35px]" src={logo} alt="" />
      {user ? <Chat user={user} /> : <Login />}
    </div>
    </div>
    </>
  );
}
export default App;
