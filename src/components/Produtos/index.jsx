import './produtos-estilos.css'
import CardProduto from "../CardProduto";
import ModalProdutos from '../ModalProdutos';

function Produtos() {
    return (
        <section className='secao-produtos'>
            <div className='container'>
                <CardProduto />
                <ModalProdutos />
            </div>
        </section>
    )
}

export default Produtos