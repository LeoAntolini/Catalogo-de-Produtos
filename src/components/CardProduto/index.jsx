import './card-estilos.css'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { FavoriteContext } from '../../context/FavoriteContext'
import toast from "react-hot-toast";

function CardProduto({ produto, abrirModal }) {

    const { addToCart } = useContext(CartContext)
    const {
        toggleFavorite,
        isFavorite
    } = useContext(FavoriteContext)

    const favorito =
    isFavorite(produto.id)

    return (
        <article>
            <div className="container-imagem">
                <img
                    src={produto.thumbnail}
                    alt={produto.title}
                    loading="lazy"
                />
                <button
                    aria-label="Adicionar aos favoritos"
                    className={
                        favorito
                            ? 'botao-favoritos ativo'
                            : 'botao-favoritos'
                    }
                    onClick={() => toggleFavorite(produto)}
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
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </button>
            </div>
            <div className="container-informacao">
                <div className="container-informacao_categoria-avaliacao">
                    <span className='categoria'>
                        {produto.category}
                    </span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3.5 w-3.5 fill-current text-amber-500"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        <span className="font-medium tabular-nums">
                            {produto.rating}
                        </span>
                    </div>
                </div>
                <h3>
                    {produto.title}
                </h3>
                <div className="container-interacao">
                    <span className="valor">
                        ${produto.price}
                    </span>
                    <div className="interacao">
                        <button 
                            className="botao-modal" 
                            data-bs-toggle="modal" 
                            data-bs-target="#Modal"
                            onClick={() => abrirModal(produto)}
                        >
                            Ver
                        </button>
                        <button aria-label="Adicionar ao carrinho" className="botao-adicionarAoCarrinho" onClick={() => {
                            addToCart(produto)
                            toast.success("Produto adicionado com sucesso!")
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-4 w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardProduto