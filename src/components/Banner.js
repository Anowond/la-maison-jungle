import "../styles/Banner.css"
import logo from "../assets/logo.png"

const Banner = () => {
    return <div className="lmj-Banner">
        <img src={logo} alt="un logo en frome de feuille" className="lmj-logo" />
        <h1 className="lmj-title">La Maison Jungle</h1>
    </div>
}

export default Banner