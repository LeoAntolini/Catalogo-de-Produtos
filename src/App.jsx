import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'
import Carrossel from './components/Carrossel'
import Produtos from './components/Produtos'
import OffCanvaCarrinho from './components/OffCanvaCarrinho'
import { useState } from 'react'


function App() {
  const [showFavorites, setShowFavorites] =
    useState(false)

  return (
    <div className='body'>
      <Header
          showFavorites={showFavorites}
          setShowFavorites={setShowFavorites}
      />
      <Carrossel />
      <Produtos 
        showFavorites={showFavorites}
      />
      <OffCanvaCarrinho />
    </div>
  )
}

export default App
