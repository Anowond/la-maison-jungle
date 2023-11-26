const plantList = [
    "monstera",
    "ficus lyrata",
    "pothos argenté",
    "yucca",
    "palmier",
    "cactus"
]

const ShoppingList = () => {
    return <div className="lmj-shoppinglist">
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    </div>
}

export default ShoppingList