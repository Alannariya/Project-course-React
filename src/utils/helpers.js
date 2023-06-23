

export const getUniqueValues = (data,type) => {
	let unique = data.map((item) => item[type])
	// console.log(unique)
	return ['all', ...new Set (unique)]
}
