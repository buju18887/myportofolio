import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  const modeSet = (darkMode) => {
    setDarkMode(darkMode)
  }

  return (
    <>
    <div className={darkMode ? 'dark' : ''}>
     <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
      <Section1 modeSet={modeSet}/>
      <Section2 />
      <Section3 />
      </main> 
      </div>
    </>
  )
}

export default App
