import "../styles/ShoppingList.css"
import { plantList } from "../datas/plantList"
import Recommendation from "./Recommendation.js";


const ShoppingList = () => {

    return (
        <div>
            <ul>
                {plantList.map((plant, index) => (
                    <li key={`${index}-${plant.category}`}>{plant.category}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map((plant, index) => (
                    <div key={plant.name}>
                        <li key={`${index}-${plant.name}`} className="lmj-plant-item">
                            {plant.name}
                            {plant.isBestSeller && <span>🔥</span>}
                            {plant.isSpecialOffer && <div>SOLDES ! ✨</div>}
                        </li>
                    </div>
                ))}
            </ul>
            <Recommendation />
        </div>
    )

}

export default ShoppingList
