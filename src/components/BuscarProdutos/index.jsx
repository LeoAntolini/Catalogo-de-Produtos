import './buscaProdutos-estilos.css'

function BuscarProdutos() {
    return (
        <section className="section-buscar-produtos">
            <div className="container-input">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                <input type="text" placeholder="Buscar produtos..." />
            </div>
            <div className="resgistro">
                <div className="container-filtros">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Todas as categorias
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button className="dropdown-item" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Action</span>
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Action</span>
                                </button>
                            </li>
                            <li>
                                <button className="dropdown-item" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Action</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Destaque
                        </button>
                        <ul className="dropdown-menu">
                            <li>
                                <button className="dropdown-item" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Action</span>
                                </button>
                            </li><li>
                                <button className="dropdown-item" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Action</span>
                                </button>
                            </li><li>
                                <button className="dropdown-item" type="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>Action</span>
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
                <p>
                    <span className='qt-produtos'>100</span>
                    produtos
                </p>
            </div>
        </section>
    )
}

export default BuscarProdutos