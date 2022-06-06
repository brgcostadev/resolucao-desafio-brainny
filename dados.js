const { faker } = require("@faker-js/faker");

faker.locale = "pt_BR";

let array = [];
const today = new Date();

for (let index = 0; index <= 1000; index++) {
	const name = faker.name.findName();
	const birthday = faker.date.birthdate({
		max: 2006,
		min: 1910,
		mode: "year",
	});
	const genre = faker.name.gender(name);
	const lastPurchaseDate = faker.date.between(
		"2020-01-01T00:00:00.000Z",
		"2022-06-05T00:00:00.000Z"
	);
	const countPurchase = faker.finance.account(2);

	array.push({
		name,
		birthday,
		genre,
		lastPurchaseDate,
		countPurchase,
	});
}

module.exports = {
	array,
	today,
};
