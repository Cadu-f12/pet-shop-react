import Banner from "../components/Banner"
import banner1 from "../assets/img/Banner-01.jpg"
import banner2 from "../assets/img/banner.jpg"

export default function Home() {

    return(
        <>
        <Banner  foto={banner1} foto2={banner2} foto3={banner2} />
        </>
    )
}