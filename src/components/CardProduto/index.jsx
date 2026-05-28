import './card-estilos.css'

function CardProduto() {
    return (
        <article>
            <div className="container-imagem">
                <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="Essence Mascara Lash Princess" loading="lazy" />
                <button aria-label="Remover dos favoritos">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                </button>
            </div>
            <div className="container-informacao">
                <div className="container-informacao_categoria-avaliacao">
                    <span className='categoria'>Beauty</span>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-3.5 w-3.5 fill-current text-amber-500"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        <span className="font-medium tabular-nums">2.6</span>
                    </div>
                </div>
                <h3>Essence Mascara Lash Princess</h3>
                <div className="container-interacao">
                    <span className="valor">$8.94</span>
                    <div className="interacao">
                        <button className="botao-modal" data-bs-toggle="modal" data-bs-target="#Modal">Ver</button>
                        <button aria-label="Adicionar ao carrinho" className="botao-adicionarAoCarrinho">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-4 w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardProduto