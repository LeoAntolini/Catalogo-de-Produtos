import './carrossel-estilos.css'

function Carrossel() {
    return (
        <section className="section-carrossel">
            <div className="seila"></div>
            <div className="seila2"></div>
            <div className="container-carrossel">
                <div className="informacao">
                    <span></span>
                    Catálogo atualizado em tempo real
                </div>
                <h1>
                    Descubra produtos
                    <br />
                    <span>escolhidos a dedo para você.</span>
                </h1>
                <p>
                    Explore um catálogo curado, filtre por categoria e salve seus favoritos - tudo em uma experiência rápida e minimalista.
                </p>
            </div>
        </section>
    )
}

export default Carrossel