const TestData = require('../model/Test')
const axios = require('axios')

const createTest = async (req, res) => {
	console.log(req.body)

	let insta_user = req.body.fields.insta_user.value
	insta_user[0] === '@' ? (insta_user = insta_user.slice(1)) : insta_user
	insta_user = insta_user.toLowerCase()

	const email = req.body.fields.email.value
	const name = req.body.fields.f_name.value

	console.log(insta_user)
	console.log(email)
	console.log(name)

	if (await TestData.findOne({ insta_user })) {
		console.log('Insta profile already tested')
		return res.status(400).json({ error: 'Insta profile already tested' })
	}

	const url = 'https://aceleragram.com.br/api/v2'
	axios
		.post(url, {
			key: process.env.FOLLOWERS_API_KEY,
			action: 'add',
			service: '436',
			link: `http://instagram.com/${insta_user}`,
			quantity: 10
		})
		.then(async (response) => {
			console.log(response.data)
			const user = await TestData.create({ name, email, insta_user })
			return res.send({ user })
		})
		.catch((error) => {
			console.log(error)
			return res.send({ error: 'Error on request' })
		})
}

module.exports = createTest
