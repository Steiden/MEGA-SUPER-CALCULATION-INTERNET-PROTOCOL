export function calcInBinary(address1, address2, mask) {
	
	let address1Binary = [];
	let address2Binary = [];
	let maskBinary = [];

	for(let i = 0; i < address1.length; i++){
		address1Binary[i] = transformToBinary(address1[i]);
		address2Binary[i] = transformToBinary(address2[i]);
		maskBinary[i] = transformToBinary(mask[i]);
	}

	return [address1Binary, address2Binary, maskBinary];
}

// Для расчетов
const arrForCalc = [128, 64, 32, 16, 8, 4, 2, 1];

// Преобразование числа в двоичную
function transformToBinary(value) {
	let res = '';
	for (let i = 0; i < arrForCalc.length; i++) {
		if (value - arrForCalc[i] >= 0) {
			res += '1';
			value -= arrForCalc[i];
		} else {
			res += '0';
			continue;
		}
	}
	return res;
}