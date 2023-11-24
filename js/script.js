import { calcInBinary } from "./modules/calculation.mjs";

const form = document.querySelector(".form");
const address1 = document.getElementById("address1");
const address2 = document.getElementById("address2");

const button = document.getElementById("submit");


form.addEventListener("submit", (e) => {
	e.preventDefault();

	// Получение ip адресов
	let value1 = address1.value.split(".");
	let value2 = address2.value.split(".");

	// Получение префикса
	let prefix;
	[value1[value1.length - 1], prefix] = value1[value1.length - 1].split("/");

	// Получение маски
	let mask = masks[prefix];
	mask = mask.split(".");

	// Преобразование в двоичную
	let [value1Binary, value2Binary, maskBinary] = calcInBinary(value1, value2, mask);
	
	// Проверка на одну подсеть

	// Подсчет подсети адресов
	let subnet1 = [];
	let subnet2 = [];
	for(let i = 0; i < value1Binary.length; i++){

		let temp1 = '';
		let temp2 = '';
		for(let j = 0; j < value1Binary[i].length; j++) {
			temp1 += value1Binary[i][j] === maskBinary[i][j] ? "1" : "0";
			temp2 += value2Binary[i][j] === maskBinary[i][j] ? "1" : "0";
		}
		subnet1[i] = temp1;
		subnet2[i] = temp2;
	}
	console.log(subnet1, subnet2);

	document.getElementById("mask").textContent = mask.join(".");

	document.getElementById("ip1").textContent = value1Binary.join(".");
	document.getElementById("ip2").textContent = value2Binary.join(".");
	document.getElementById("maskBin").textContent = maskBinary.join(".");

	document.getElementById("ip11").textContent = subnet1.join(".");
	document.getElementById("ip22").textContent = subnet2.join(".");


	// Вывод результата
});

// Массив масок подсети
const masks = {
	32: "255.255.255.255",
	31: "255.255.255.254",
	30: "255.255.255.252",
	29: "255.255.255.248",
	28: "255.255.255.240",
	27: "255.255.255.224",
	26: "255.255.255.192",
	25: "255.255.255.128",
	24: "255.255.255.0",
	23: "255.255.254.0",
	22: "255.255.252.0",
	21: "255.255.248.0",
	20: "255.255.240.0",
	19: "255.255.224.0",
	18: "255.255.192.0",
	17: "255.255.128.0",
	16: "255.255.0.0",
	15: "255.254.0.0",
	14: "255.252.0.0",
	13: "255.248.0.0",
	12: "255.240.0.0",
	11: "255.224.0.0",
	10: "255.192.0.0",
	9: "255.128.0.0",
	8: "255.0.0.0",
	7: "254.0.0.0",
	6: "252.0.0.0",
	5: "248.0.0.0",
	4: "240.0.0.0",
	3: "224.0.0.0",
	2: "192.0.0.0",
	1: "128.0.0.0",
	0: "0.0.0.0"
}

address1.addEventListener("keydown", e => {
	if(e.code === 'Enter') form.submit();
});
address2.addEventListener("keydown", e => {
	if(e.code === 'Enter') form.submit();
});