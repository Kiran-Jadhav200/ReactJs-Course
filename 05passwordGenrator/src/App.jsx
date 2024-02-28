import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharsAllowed] = useState(false);
  const [passowrd, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passowrdGenerator =useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
     
    if(numberAllowed) str += "0123456789"
      if(charAllowed) str += "!@#$%^&*()[]{}`~_+="
      
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()* str.length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(passowrd)
  },[passowrd])


  useEffect(()=>{
    passowrdGenerator();
  },[length, numberAllowed,charAllowed, passowrdGenerator])
  return (
    <>
    <div>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Passowrd Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={passowrd}
          className='outline-none w-full py-1 px3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursur-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />

            <label>Length: {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev) => !prev)
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={charAllowed}
          id='charInput'
          onChange={()=>{
            setcharsAllowed((prev) => !prev)
            }
          } 
          />
          <label htmlFor='charInput'> Characters</label>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
