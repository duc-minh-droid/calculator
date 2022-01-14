import { useState } from "react"

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")

  const ops = ["+","-","*","/"]

  const updateCalc = (value) => {
    if (ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1)))
      {
        return;
      }

    console.log(`calc: ${calc}`)
    console.log(`value: ${value}`)
    console.log(`last calc: ${calc.slice(-1)}`)

    setCalc(calc+value)

    if (!ops.includes(value)) {
      setResult(eval(calc+value).toString())
    }
  }


  const createDigits = () => {
    const array = []
    for (let i=1;i<10;i++) {
      array.push(
        <button key={i} onClick={()=>updateCalc(i.toString())} >{i}</button>
      )
    }
    return array
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  const delast = () => {
    if (calc=="") {
      return;
    }
    setCalc(calc.slice(0,-1))
    setResult(calc.slice(0,-1))
  }

  return (
    <div className="App">

      <div className="calculator">

        <div className="display">
          {result?<span>({result})</span>:""}  {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={()=>updateCalc("+")} className="ops">+</button>
          <button onClick={()=>updateCalc("-")} className="ops">-</button>
          <button onClick={()=>updateCalc("*")} className="ops">*</button>
          <button onClick={()=>updateCalc("/")} className="ops">/</button>
          <button onClick={delast}>DEL</button>

        </div>

        <div className="digits">
          { createDigits() }
          <button onClick={()=>updateCalc("0")}>0</button>
          <button onClick={()=>updateCalc(".")}>.</button>
          <button onClick={calculate} className="equal">=</button>
        </div>

      </div>
      
    </div>
  );
}

export default App;
