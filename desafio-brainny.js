const { array, today } = require("./dados");

// 1
// function resolucao(caractere) {
// 	return console.log(
// 		array.filter((item) => caractere.toUpperCase() === item.name.substr(0, 1))
// 	);
// }
// resolucao("m");

//2
// function resolucao() {
// 	return console.log(array.map((item) => "Cliente: " + item.name));
// }
// resolucao();

//3
// function resolucao() {
// 	return console.log(
// 		array.map((item, index) => "Cliente " + index + ": " + item.name)
// 	);
// }
// resolucao();

//4
// function resolucao(caractere) {
// 	return console.log(
// 		array.filter((item) => caractere.toUpperCase() === item.name.substr(0, 1))
// 			.length
// 	);
// }
// resolucao("m");

//5
// function resolucao() {
// 	return console.log(array.map((item) => item.name));
// }
// resolucao();

//6
// function resolucao() {
// 	return console.log(
// 		array.map((item) => {
// 			if (
//				item.name.split(" ")[0] === "Sr." ||
//				item.name.split(" ")[0] === "Sra." ||
//				item.name.split(" ")[0] === "Srta." ||
//				item.name.split(" ")[0] === "Dr." ||
//				item.name.split(" ")[0] === "Dra."
// 			) {
// 				return item.name.split(" ")[1];
// 			}
// 			return item.name.split(" ")[0];
// 		})
// 	);
// }
// resolucao();

//7
// function resolucao(caractere) {
// 	const filtroCaractere = array.filter(
// 		(item) => caractere.toUpperCase() === item.name.substr(0, 1)
// 	);
// 	return console.log(
// 		filtroCaractere.map((item) => {
// 			if (
// 				item.name.split(" ")[0] === "Sr." ||
// 				item.name.split(" ")[0] === "Sra." ||
// 				item.name.split(" ")[0] === "Srta." ||
// 				item.name.split(" ")[0] === "Dr." ||
// 				item.name.split(" ")[0] === "Dra."
// 			) {
// 				return item.name.split(" ")[1];
// 			}
// 			return item.name.split(" ")[0];
// 		})
// 	);
// }
// resolucao("b");

//8
// function resolucao() {
// 	return console.log(
// 		array.filter((item) => {
// 			let age = today.getFullYear() - item.birthday.getFullYear();

// 			if (
// 				new Date(today.getFullYear(), today.getMonth(), today.getDate()) <
// 				new Date(
// 					today.getFullYear(),
// 					item.birthday.getMonth(),
// 					item.birthday.getDate()
// 				)
// 			) {
// 				age--;
// 			}
// 			if (age >= 18) {
// 				return item;
// 			}
// 		})
// 	);
// }
// resolucao();

//9
// function resolucao(nome) {
// 	return console.log(
// 		array.find((item) => nome.toLowerCase() === item.name.toLowerCase())
// 	);
// }
// resolucao("marcos albuquerque");

//10
// function resolucao() {
// 	let total = 0;
// 	for (let i = 0; i < array.length; i++) {
// 		total += parseInt(array[i].countPurchase);
// 	}
// 	return console.log(total);
// }
// resolucao();

// Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.

//11
// function resolucao() {
// 	return console.log(
// 		array.filter((item) => {
// 			let ultimaCompra =
// 				today.getFullYear() - item.lastPurchaseDate.getFullYear();
// 			if (
// 				new Date(today.getFullYear(), today.getMonth(), today.getDate()) <
// 				new Date(
// 					today.getFullYear(),
// 					item.lastPurchaseDate.getMonth(),
// 					item.lastPurchaseDate.getDate()
// 				)
// 			) {
// 				ultimaCompra--;
// 			}
// 			if (ultimaCompra >= 1) {
// 				return item;
// 			}
// 		})
// 	);
// }
// resolucao();

//12
// function resolucao() {
// 	return console.log(array.filter((item) => item.countPurchase > 15));
// }
// resolucao();

//13
// function resolucao(cliente) {
// 	array.unshift(cliente);
// }
// const cliente = {
// 	name: "Jośe",
// 	birthday: "1989-08-23T00:00:00.000Z",
// 	genre: "Masculino",
// 	lastPurchaseDate: "2022-06-05T00:00:00.000Z",
// 	countPurchase: 0,
// };
// resolucao(cliente);
