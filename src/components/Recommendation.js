const Recommendation = () => {

    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 3 && currentMonth <= 5  

    if (!isSpring) {

        return <div>Ce n'est pas encore le printemps ! On rempote pas ! ⛔</div>

    }
   
    return <div>C'est le printemps ! rempotez ! 🌱</div>
    
}

export default Recommendation