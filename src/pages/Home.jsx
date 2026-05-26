import Banner from "../components/Banner"

import Card from "../components/Card"

import banner1 from "../assets/img/Banner-01.jpg"
import banner2 from "../assets/img/banner.jpg"
import imagem1 from "../assets/img/banho-tosa.jpg"
import imagem2 from "../assets/img/vacina-cachorro.jpg"
import imagem3 from "../assets/img/adestramento.jpg"
import imagem4 from "../assets/img/hotel-para-cachorros.jpg"

export default function Home() {

    return (
        <>
            <Banner
                foto={banner1}
                foto2={banner2}
                foto3={banner2}
            />

            <div className="container">
                <div className="row">
                    <Card foto={imagem1} titulo="teste" />
                    <Card foto={imagem2} titulo="teste" />
                    <Card foto={imagem3} titulo="teste" />
                    <Card foto={imagem4} titulo="teste" />
                </div>
            </div>
        </>
    )
}