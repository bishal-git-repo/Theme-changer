
import Color from "./Background.jsx"


function App() {


  return (
    <>
       

     <div className="bg-slate-400 mx-5 flex flex-wrap items-center justify-center gap-2 rounded-md  shadow-lg my-3 px-2 py-2 ">
       <div className=" bg-green-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Green" onClick={() => Color("green")} >Green</button>
       </div>
       <div className=" bg-red-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Red" onClick={() => Color("red")}>Red</button>
       </div>
       <div className=" bg-blue-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Blue" onClick={() => Color("blue")}>Blue</button>
       </div>
       <div className=" bg-black h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Black" onClick={() => Color("black")}>Black</button>
       </div>
       <div className=" bg-white h-7 w-20 rounded-lg text-center  font-bold shadow-md"><button id="Black" onClick={() => Color("white")}>White</button>
       </div>
       <div className=" bg-orange-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Black" onClick={() => Color("orange")}>Orange</button>
       </div>
       <div className=" bg-purple-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Black" onClick={() => Color("purple")}>Purple</button>
       </div>
       <div className=" bg-teal-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Black" onClick={() => Color("teal")}>Teal</button>
       </div>
       <div className=" bg-indigo-500 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Black" onClick={() => Color("indigo")}>Indigo</button>
       </div>
       <div className=" bg-pink-700 h-7 w-20 rounded-lg text-center text-white font-bold shadow-md"><button id="Black" onClick={() => Color("#C2185B")}>Pink</button>
       </div>

     </div>

    </>
  
  )
}

export default App
