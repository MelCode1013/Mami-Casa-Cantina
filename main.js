const foodMenu = document.querySelector('#foodMenu')
const drinkMenu = document.querySelector('#drinkMenu')
const kidMenu = document.querySelector('#kidMenu')
// const playFoodMenu = document.getElementById('foodMenuButton')
// const playDrinkMenu = document.getElementById('drinksMenuButton')
// const playKidMenu = document.getElementById('kidMenuButton')


document.querySelector('#foodMenuButton').addEventListener('click', foodMenushow)
document.querySelector('#drinksMenuButton').addEventListener('click', drinkMenushow)
document.querySelector('#kidMenuButton').addEventListener('click', kidMenushow)

function foodMenushow(){
	kidMenu.classList.add("hidden")
	drinkMenu.classList.add("hidden")
	foodMenu.classList.toggle("hidden")
	foodMenu.play()

}

function drinkMenushow(){
	foodMenu.classList.add("hidden")
	kidMenu.classList.add("hidden")
	drinkMenu.classList.toggle("hidden")
	drinkMenu.play()

}

function kidMenushow(){
	foodMenu.classList.add("hidden")
	drinkMenu.classList.add("hidden")
	kidMenu.classList.toggle("hidden")
	kidMenu.play()

}
