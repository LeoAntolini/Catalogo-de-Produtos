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
                    <div class="carousel-item active">
                        <img class="w-100 img-fluid d-md-none" src="./public/assets/Mobile/Banner 1 - Mobile.png"
                            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás" />
                        <img class="w-100 img-fluid d-none d-md-block d-xl-none" src="./public/assets/Tablet/Banner 1 - Tablet.png"
                            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás" />
                        <img class="w-100 img-fluid d-none d-xl-block" src="./public/assets/Desktop/Banner 1 - Desktop.png"
                            alt="Modelo feminina vestindo blusa rosa fluorescente, em fundo lilás" />
                        <div class="carousel-caption position-absolute posicao">
                            <h5 class="fs-1">ESSÊNCIAS QUE MARCAM MOMENTOS</h5>
                            <p class="fs-4">Descubra fragrâncias sofisticadas que combinam elegância, personalidade e presença em cada detalhe.</p>
                        </div>
                    </div>
                    <div class="carousel-item position-relative">
                        <img class="w-100 img-fluid d-md-none" src="./public/assets/Mobile/Banner 2 - Mobile.png"
                            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa." />
                        <img class="w-100 img-fluid d-none d-md-block d-xl-none" src="./public/assets/Tablet/Banner 2 - Tablet.png"
                            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa." />
                        <img class="w-100 img-fluid d-none d-xl-block" src="./public/assets/Desktop/Banner 2 - Desktop.png"
                            alt="Modelo feminina utilizando óculos escuros e vestindo conjunto esportivo de blusa e calça na cor preta, sentada em um sofá preto em um fundo rosa." />
                        <div class="carousel-caption position-absolute posicao">
                            <h5 class="fs-1">BELEZA QUE REALÇA SUA ESSÊNCIA</h5>
                            <p class="fs-4">Produtos criados para destacar sua beleza natural com qualidade, estilo e confiança todos os dias.</p>
                        </div>
                    </div>
                    <div class="carousel-item position-relative">
                        <img class="w-100 img-fluid d-md-none" src="./public/assets/Mobile/Banner 3 - Mobile.png"
                            alt="Modelo masculino utilizando oculos de cor preta, vestindo um conjunto de esporte fino da cor cinza em um fundo laranja" />
                        <img class="w-100 img-fluid d-none d-md-block d-xl-none" src="./public/assets/Tablet/Banner 3 - Tablet.png"
                            alt="Modelo masculino utilizando oculos de cor preta, vestindo um conjunto de esporte fino da cor cinza em um fundo laranja" />
                        <img class="w-100 img-fluid d-none d-xl-block" src="./public/assets/Desktop/Banner 3 - Desktop.png"
                            alt="Modelo masculino utilizando oculos de cor preta, vestindo um conjunto de esporte fino da cor cinza em um fundo laranja" />
                        <div class="carousel-caption position-absolute posicao">
                            <h5 class="fs-1">CONFORTO E DESIGN PARA SEU ESPAÇO</h5>
                            <p class="fs-4">Móveis modernos e funcionais que transformam ambientes com sofisticação e praticidade.</p>
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