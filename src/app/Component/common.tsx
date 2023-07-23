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
	return removeUnicode(str)
		.toLowerCase()
		.replace(/([^0-9a-z-\s])/g, '-')
		.replace(/(\s+)/g, '-')
		.replace(/-+/g, '-')
		.replace(/^-+|-+$/g, '-');
}
