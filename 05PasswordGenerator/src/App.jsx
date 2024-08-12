import { useCallback, useEffect, useRef, useState } from "react"


function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("");

  const passwordRef = useRef(null);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="@#$%&_~"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto my-10 px-4 rounded-lg shadow-lg text-orange-600 bg-gray-700">
      <h1 className="text-center text-4xl text-white font-semibold my-3">Password Generator</h1>
      <div className="flex rounded-lg overflow-hidden my-4">
        <input className="w-full outline-none py-2 px-2" type="text" value={password} placeholder="Password" ref={passwordRef} readOnly/>
        <button onClick={copyPassword} className="py-1 px-2 bg-blue-600 text-white text-xl">Copy</button>
      </div>
      <div className="flex text-sm gap-x-4 py-4">
        <div className="flex items-center gap-x-1">
        <input type="range" min={8} max={30} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
        <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}}/>
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" id="charInput" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((prev)=>!prev)}}/>
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
