const plantList = [
    "monstera",
    "ficus lyrata",
    "pothos argenté",
    "yucca",
    "palmier",
    "cactus"
]


const ShoppingList = () => {

    return <ul>
        {plantList.map((plant, index) => (
            <li key={`${plant}-${index}`}>{plant}</li>
        ))}
    </ul>
}

export default ShoppingList
