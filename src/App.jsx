import { useState } from 'react'

import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'
import useTheme from './Context/Theme'
import { ThemeProvider } from './Context/Theme'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }

  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  
  return (
    <>
     <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
            <div
       className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                         <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                    </div>
                </div>
            </div>
</ThemeProvider>
    </>
  )
}

export default App
