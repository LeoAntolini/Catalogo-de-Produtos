import './modalProdutos-estilos.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import {
    FavoriteContext
} from '../../context/FavoriteContext'
import toast from "react-hot-toast";

function ModalProdutos({ produto, show, fecharModal }) {

    const { addToCart } = useContext(CartContext)

    const {
        toggleFavorite,
        isFavorite
    } = useContext(FavoriteContext)

    if (!produto) {
        return null
    }

    const favorito =
    isFavorite(produto.id)

    return (
        <div class="modal fade" id="Modal">
            <div className='modal-dialog modal-dialog-centered box-modal' >
                <div className="modal-content container-modal_dialog">
                    <div className="container-img">
                        <img 
                            src={produto.thumbnail}
                            alt={produto.title}
                        />
                    </div>
                    <div className="container-conteudo">
                        <div className="container-conteudo_header">
                            <div className="container-conteudo_header__destaque">
                                <span className="container-conteudo_header__destaque-categoria">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag h-3 w-3"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                                    {produto.category}
                                </span>
                                <span className="container-conteudo_header__destaque-avaliacao">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3 w-3 fill-amber-500 text-amber-500"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                    {produto.rating}
                                </span>
                            </div>
                            <h2 id="radix-:r8e:" >
                                {produto.title}
                            </h2>
                            <p className="fabricante-name">
                                Fabricante: <span>{produto.brand}</span>
                            </p>
                        </div>
                        <p id="radix-:r8f:" className="descricao-produto">
                            {produto.description}
                        </p>
                        <div className="estoque-produto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package h-4 w-4"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"></path><path d="m7.5 4.27 9 5.15"></path></svg>
                            <span>{produto.stock}</span>
                        </div>
                        <div className="container-interacao-modal">
                            <div className="preco_produto">
                                <span>${produto.price}</span>
                            </div>
                            <div className="interacao-modal">
                                <button 
                                    className="botao-addCarrinho"
                                    onClick={() =>{ 
                                        addToCart(produto)
                                        toast.success("Produto adicionado com sucesso!")
                                    }} 
                                    data-bs-dismiss="modal" aria-label="Close"     
                                >
                                    Adicionar ao carrinho
                                </button>
                                <button 
                                    className={
                                        favorito
                                            ? 'botao-favoritar ativo'
                                            : 'botao-favoritar'
                                    } 
                                    aria-label="Adicionar aos favoritos"
                                    onClick={() =>
                                        toggleFavorite(produto)
                                    }
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill={
                                            favorito
                                                ? '#EF4444'
                                                : 'none'
                                        }
                                        stroke={
                                            favorito
                                                ? '#EF4444'
                                                : 'currentColor'
                                        } 
                                        strokeWidth="2" 
                                        strokeLinecap="round"
                                        strokeLinejoin="round" 
                                        className="lucide lucide-heart h-5 w-5 transition-smooth"
                                    >
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <button type="button" className='button-close' data-bs-dismiss="modal" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
            </div >
        </div>
    )
}

export default ModalProdutos