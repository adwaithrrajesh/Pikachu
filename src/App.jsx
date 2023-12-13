import { useState } from 'react'
import Searchbox from './components/searchbox'
import { Toaster } from 'react-hot-toast'
import Cards from './components/Cards.jsx'

function App() {

  return (
    <>
    < Toaster />
    <Searchbox />
    </>
  )
}

export default App
