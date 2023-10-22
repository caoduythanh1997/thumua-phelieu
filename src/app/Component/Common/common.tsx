export function stringHTML(str: string): string {
	return str
		.replace(/<[^>]+>/g, '-')
		.replace(/ +/g, '-')
		.trim();
}

export function removeUnicode(str: string): string {
	return stringHTML(str)
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[đĐ]/g, '');
}

export function toSlug(str: string): string {
	return removeDiacritics(str)
		.toLowerCase()
		.replace(/([^0-9a-z-\s])/g, '-')
		.replace(/(\s+)/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '-');
}

export function removeDiacritics(str: string): string {
	const diacriticsMap: { [key: string]: string } = {
		à: 'a',
		á: 'a',
		ạ: 'a',
		ả: 'a',
		ã: 'a',
		â: 'a',
		ầ: 'a',
		ấ: 'a',
		ậ: 'a',
		ẩ: 'a',
		ẫ: 'a',
		ă: 'a',
		ằ: 'a',
		ắ: 'a',
		ặ: 'a',
		ẳ: 'a',
		ẵ: 'a',
		è: 'e',
		é: 'e',
		ẹ: 'e',
		ẻ: 'e',
		ẽ: 'e',
		ê: 'e',
		ề: 'e',
		ế: 'e',
		ệ: 'e',
		ể: 'e',
		ễ: 'e',
		ì: 'i',
		í: 'i',
		ị: 'i',
		ỉ: 'i',
		ĩ: 'i',
		ò: 'o',
		ó: 'o',
		ọ: 'o',
		ỏ: 'o',
		õ: 'o',
		ô: 'o',
		ồ: 'o',
		ố: 'o',
		ộ: 'o',
		ổ: 'o',
		ỗ: 'o',
		ơ: 'o',
		ờ: 'o',
		ớ: 'o',
		ợ: 'o',
		ở: 'o',
		ỡ: 'o',
		ù: 'u',
		ú: 'u',
		ụ: 'u',
		ủ: 'u',
		ũ: 'u',
		ư: 'u',
		ừ: 'u',
		ứ: 'u',
		ự: 'u',
		ử: 'u',
		ữ: 'u',
		ỳ: 'y',
		ý: 'y',
		ỵ: 'y',
		ỷ: 'y',
		ỹ: 'y',
		đ: 'd',
		À: 'A',
		Á: 'A',
		Ạ: 'A',
		Ả: 'A',
		Ã: 'A',
		Â: 'A',
		Ầ: 'A',
		Ấ: 'A',
		Ậ: 'A',
		Ẩ: 'A',
		Ẫ: 'A',
		Ă: 'A',
		Ằ: 'A',
		Ắ: 'A',
		Ặ: 'A',
		Ẳ: 'A',
		Ẵ: 'A',
		È: 'E',
		É: 'E',
		Ẹ: 'E',
		Ẻ: 'E',
		Ẽ: 'E',
		Ê: 'E',
		Ề: 'E',
		Ế: 'E',
		Ệ: 'E',
		Ể: 'E',
		Ễ: 'E',
		Ì: 'I',
		Í: 'I',
		Ị: 'I',
		Ỉ: 'I',
		Ĩ: 'I',
		Ò: 'O',
		Ó: 'O',
		Ọ: 'O',
		Ỏ: 'O',
		Õ: 'O',
		Ô: 'O',
		Ồ: 'O',
		Ố: 'O',
		Ộ: 'O',
		Ổ: 'O',
		Ỗ: 'O',
		Ơ: 'O',
		Ờ: 'O',
		Ớ: 'O',
		Ợ: 'O',
		Ở: 'O',
		Ỡ: 'O',
		Ù: 'U',
		Ú: 'U',
		Ụ: 'U',
		Ủ: 'U',
		Ũ: 'U',
		Ư: 'U',
		Ừ: 'U',
		Ứ: 'U',
		Ự: 'U',
		Ử: 'U',
		Ữ: 'U',
		Ỳ: 'Y',
		Ý: 'Y',
		Ỵ: 'Y',
		Ỷ: 'Y',
		Ỹ: 'Y',
		Đ: 'D',
	};

	return str.replace(/[^A-Za-z0-9[\] ]/g, (match) => diacriticsMap[match] || match);
}