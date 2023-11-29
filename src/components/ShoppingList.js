import "../styles/ShoppingList.css"
import { plantList } from "../datas/plantList"

const ShoppingList = () => {

    let categoryTab = []

    plantList.forEach(element => {
        categoryTab.push(element.category)
    })

    return (
        <div>
            <ul>
                {categoryTab.map((categoryElement, index) => (
                    <li key={`${index}-${categoryElement}`}>{categoryElement}</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plantList.map((plant,index) => (
                    <li key={`${index}-${plant.name}`} className="lmj-plant-item">{plant.name}{plant.isBestSeller && plant.category === "plante grasse" && <span>🔥</span>}</li>
                    
                ))}
            </ul>
        </div>
    )

}

export default ShoppingList
