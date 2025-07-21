import { useState } from 'react'
import ClassifyBox from './components/classifyBox';
import ClassifyHistory from './components/classifyHistory';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (<>
  <ClassifyBox/>
  <hr/>
  <ClassifyHistory/>
  </>)
}

export default App
