import './produtos-estilos.css'
import './buscaProdutos-estilos.css'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import CardProduto from "../CardProduto";
import ModalProdutos from '../ModalProdutos';
import {
    FavoriteContext
} from '../../context/FavoriteContext'


function Produtos({ showFavorites }) {
    const [produtos, setProdutos] = useState([])
    const [produtoSelecionado, setProdutoSelecionado] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortOption, setSortOption] = useState('')
    const [loading, setLoading] = useState(true)
    const {
        favorites
    } = useContext(FavoriteContext)


    useEffect(() => {

        axios
            .get('https://dummyjson.com/products')
            .then(response => {

                setProdutos(response.data.products)
                setLoading(false)

            })

    }, [])

    function abrirModal(produto) {
        setProdutoSelecionado(produto)
        setShowModal(true)
    }

    function fecharModal() {
        setShowModal(false)
    }

    const categories = [

        'all',

        ...new Set(
            produtos.map(
                produto => produto.category
            )
        )
    ]

    const categoryLabels = {
        all: 'Todas as categorias',
        beauty: 'Beleza',
        fragrances: 'Perfumes',
        furniture: 'Móveis',
        groceries: 'Mercado'
    }

    const sourceProducts =

        showFavorites

            ? favorites

            : produtos

    const filteredProducts = sourceProducts

        .filter(produto => {

            const matchesSearch =

                produto.title
                    .toLowerCase()
                    .includes(
                        search.toLowerCase()
                    )

            const matchesCategory =

                selectedCategory === 'all'

                    ? true

                    : produto.category === selectedCategory

            return matchesSearch && matchesCategory
        })

        .sort((a, b) => {

            if (sortOption === 'lowest') {

                return a.price - b.price
            }

            if (sortOption === 'highest') {

                return b.price - a.price
            }

            if (sortOption === 'rating') {

                return b.rating - a.rating
            }

            return 0
        })

    const sortLabels = {
        '': 'Ordenar',
        lowest: 'Menor preço',
        highest: 'Maior preço',
        rating: 'Melhor avaliação'
    }

    const handleSortChange = (value) => {
        setSortOption(value)
    }

    return (
        <>
            <section className="section-buscar-produtos">
                <div className="container-input">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                    <input 
                        type="text" 
                        placeholder="Buscar produtos..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <div className="resgistro">
                    <div className="container-filtros">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle btn-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {
                                    categoryLabels[selectedCategory]
                                    || selectedCategory
                                }
                            </button>
                            <ul className="dropdown-menu">
                                {categories.map(category => (
                                    <li key={category}>
                                        <button
                                            className={
                                                selectedCategory === category
                                                    ? 'dropdown-item active-item'
                                                    : 'dropdown-item'
                                            }
                                            type="button"
                                            onClick={() =>
                                            setSelectedCategory(category)
                                            }
                                        >
                                            {
                                            selectedCategory === category &&
                                            (
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                >
                                                <path
                                                    d="M4 12.6111L8.92308 17.5L20 6.5"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </svg>
                                            )
                                            }
                                            <span>
                                                {
                                                    categoryLabels[category]
                                                        || category
                                                }
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-secondary dropdown-toggle btn-dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                               {sortLabels[sortOption]}
                            </button>
                            <ul className="dropdown-menu">
                                {Object.entries(sortLabels).map(([value, label]) => (
                                    <li key={value}>
                                        <button
                                            className={
                                            sortOption === value
                                                ? 'dropdown-item active-item'
                                                : 'dropdown-item'
                                            }
                                            type="button"
                                            onClick={() => setSortOption(value)}
                                        >
                                            {
                                            sortOption === value &&
                                            (
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                >
                                                <path
                                                    d="M4 12.6111L8.92308 17.5L20 6.5"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                </svg>
                                            )
                                            }
                                            <span>
                                                {label}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p>
                        <span className='qt-produtos'>
                            {filteredProducts.length}
                        </span>
                        produtos
                    </p>
                </div>
            </section>
            <section className='secao-produtos'>

                {
                    loading && (
                        <div className='row g-4'>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(item => (
                                <div
                                    className='col-lg-3 col-md-6'
                                    key={item}
                                >
                                    <div className='skeleton-card'></div>
                                </div>
                            ))}
                        </div>
                    )
                }

                <div className='container'>
                    {filteredProducts.map((produto) => (
                        <CardProduto
                            key={produto.id}
                            produto={produto}
                            abrirModal={abrirModal}
                        />
                    ))}

                    <ModalProdutos
                        produto={produtoSelecionado}
                        fecharModal={fecharModal}
                        show={showModal}
                    />
                </div>
            </section>
        </>
    )
}

export default Produtos