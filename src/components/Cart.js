import "../styles/cart.css"
import caddie from "../assets/caddie.png"

const Cart = () => {
    let monsteraPrice = 8
    let lierrePrice = 10
    let bouquetPrice = 15

    return <div className="lmj-cart">
        <div className="lmj-panier">
            <h2>Panier</h2>
            <img src={caddie} alt="un logo de caddie" className="lmj-caddielogo" />
        </div>
        <ul>
            <li>Monstera : {monsteraPrice} 🌺</li>
            <li>Lierre : {lierrePrice} 🌿</li>
            <li>Bouquet de fleurs : {bouquetPrice} 💐</li>
            Total : {monsteraPrice + lierrePrice + bouquetPrice}
        </ul>
    </div>
}

export default Cart