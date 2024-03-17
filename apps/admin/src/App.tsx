import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add } from "@antdui";
let sum=add(1, 2);
console.log(sum,'引入内部组件成功')
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
