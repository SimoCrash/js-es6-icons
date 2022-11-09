const arrCard = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fa',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fa',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fa',
		color: 'blue'
	}
];

let selectBtn = document.querySelector(".select");


arrCard.forEach((element) => {
	const eleCard = document.querySelector(".cards");
let card = document.createElement("div");
	card.classList.add("card");
	eleCard.append(card);
	
		card.innerHTML = `
		<i class="${element.family}-solid ${element.prefix}${element.name}" style="color: ${element.color}"></i>
		<div> ${element.name} </div>
		`;
	console.log(selectBtn.value);
});

// const selectAnimal = [];
// const selectVegetable = [];
// const selectUser = [];

// for (let i = 0; i < arrCard.length; i++) {
// 	if(arrCard.type == "animal") {
// 		selectAnimal.push(arrCard.type);
// 	} else if (selectBtn.value == "vegetable") {
// 		arrCard.push[selectVegetable];
// 	} else if (selectBtn.value == "user") {
// 		arrCard.push(selectUser);
// 	}
// }

// console.log(selectAnimal);
// console.log(selectVegetable);
// console.log(selectUser);




// // 
// // if()