import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './components/Header'
import Carrossel from './components/Carrossel'
import Produtos from './components/Produtos'
import BuscarProdutos from './components/BuscarProdutos'
import OffCanvaCarrinho from './components/OffCanvaCarrinho'


function App() {

  return (
    <div className='body'>
      <Header />
      <Carrossel />
      <BuscarProdutos />
      <Produtos />
      <OffCanvaCarrinho />
    </div>
  )
}

export default App
