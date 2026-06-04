import './carrossel-estilos.css'

function Carrossel() {
    return (
        <section className="section-carrossel">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Diapositivo 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Diapositivo 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Diapositivo 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100 img-fluid d-md-none" src="/assets/Mobile/banner1-mobile.png"/>
                        <img className="w-100 img-fluid d-none d-md-block d-xl-none" src="/assets/Tablet/banner1-tablet.png"/>
                        <img className="w-100 img-fluid d-none d-xl-block" src="/assets/Desktop/banner1-desktop.png"/>
                        <div className="carousel-caption position-absolute posicao">
                            <h5 className="fs-1">ESSÊNCIAS QUE MARCAM MOMENTOS</h5>
                            <p className="fs-4">Descubra fragrâncias sofisticadas que combinam elegância, personalidade e presença em cada detalhe.</p>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img className="w-100 img-fluid d-md-none" src="/assets/Mobile/banner2-mobile.png"/>
                        <img className="w-100 img-fluid d-none d-md-block d-xl-none" src="/assets/Tablet/banner2-tablet.png"/>
                        <img className="w-100 img-fluid d-none d-xl-block" src="/assets/Desktop/banner2-desktop.png"/>
                        <div className="carousel-caption position-absolute posicao">
                            <h5 className="fs-1">BELEZA QUE REALÇA SUA ESSÊNCIA</h5>
                            <p className="fs-4">Produtos criados para destacar sua beleza natural com qualidade, estilo e confiança todos os dias.</p>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <img className="w-100 img-fluid d-md-none" src="/assets/Mobile/banner3-mobile.png"/>
                        <img className="w-100 img-fluid d-none d-md-block d-xl-none" src="/assets/Tablet/banner3-tablet.png"/>
                        <img className="w-100 img-fluid d-none d-xl-block" src="/assets/Desktop/banner3-desktop.png"/>
                        <div className="carousel-caption position-absolute posicao">
                            <h5 className="fs-1">CONFORTO E DESIGN PARA SEU ESPAÇO</h5>
                            <p className="fs-4">Móveis modernos e funcionais que transformam ambientes com sofisticação e praticidade.</p>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Próximo</span>
                </button>
            </div>
        </section>
    )
}

export default Carrossel