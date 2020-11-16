module.exports = { catchEmAll }

async function catchEmAll (promise) {
	return promise
		.then(data => [ undefined, data ])
		.catch(error => [ error, undefined ])
}
