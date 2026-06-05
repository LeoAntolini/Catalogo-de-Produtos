import './offCanvaCarrinho-estilos.css';
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import toast from "react-hot-toast";

function OffCanvaCarrinho() {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice
    } = useContext(CartContext)

    return (
        <div className="offcanvas offcanvas-end container-area-carrinho" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className='container-header-carrinho'>
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-5 w-5 text-primary"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    Seu Carrinho
                </h2>
                {cartItems.length === 0 ? (
                    <p>Seu carrinho está vazio.</p>
                ) : (
                    <p>
                        {cartItems.length}
                        {cartItems.length === 1 ? ' item ' : ' itens '}
                        no carrinho.
                    </p>
                )}
            </div>
            <>

                {cartItems.length === 0 ? (
                    <div className='container-body-carrinho'>
                        <div className='container-svg-carrinho'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag h-5 w-5 text-primary"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                        </div>
                        <p className='container-paragrafo-carrinho'>Adicione produtos para vê-los aqui.</p>
                        <button className='container-button-carrinho'
                        data-bs-dismiss="offcanvas" aria-label="Close"
                        >Continuar Comprando</button>
                    </div>
                ) : (
                    <>
                        <ul className='container-lista-carrinho'>
                            {cartItems.map((item) => (
                                <li key={item.id} className='container-item-carrinho'>
                                    <div className='cart-item-image'>
                                        <img src={item.thumbnail} alt={item.title} />
                                    </div>
                                    <div className='cart-item-info'>

                                        <div className='cart-item-title'>
                                            <h4>{item.title}</h4>
                                            <button 
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                            </button>
                                        </div>
                                        <div className='cart-item-quantity-price'>
                                            <div className='cart-item-quantity'>
                                                <button 
                                                className='button-decrease'
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-minus h-3 w-3"><path d="M5 12h14"></path></svg>
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button 
                                                className='button-increase'
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-3 w-3"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                                                </button>
                                            </div>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className='container-footer-carrinho'>
                            <div className='container-total-carrinho'>
                                <span className='fw-semibold fs-5'>Total:</span> 
                                <span className='fw-bold fs-4'>${totalPrice.toFixed(2)}</span>
                            </div>   
                            <button 
                                className='container-button-finalizar-carrinho'
                                onClick={
                                    () => {
                                        clearCart()
                                        toast.success("Compra Finalizada com sucesso!")
                                    }
                                }
                                data-bs-dismiss="offcanvas" aria-label="Close"
                            >
                                Finalizar Compra
                            </button>     
                        </div>
                    </>
                )}
            </>

            <button className='button-close' data-bs-dismiss="offcanvas" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
            </button>
        </div>
    )
}

export default OffCanvaCarrinho;