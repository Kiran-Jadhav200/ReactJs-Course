import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   
   ><div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-xl"
    >
      <button 
      onClick={()=>{setColor("red")}}
      className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"} }
      >Red</button>
      <button
      onClick={()=>{setColor("blue")}}
      className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
      style={{backgroundColor:"blue"}}
      >blue</button>
      <button
      onClick={()=>{setColor("yellow")}}
      className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
      style={{backgroundColor:"yellow"}}
      >yellow</button>
      <button
      onClick={()=>{setColor("black")}}
      className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
      style={{backgroundColor:"black"}}
      >black</button>
      <button
      onClick={()=>{setColor("orange")}}
      className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
      style={{backgroundColor:"orange"}}
      >orange</button>
      <button
       onClick={()=>{setColor("purple")}}
      className="outline-none px-4 py-1
      rounded-full text-white shadow-lg"
      style={{backgroundColor:"purple"}}
      >purple</button>
    </div>
    </div> </div>
  )
}

export default App