const TestData = require('../model/Test')
const axios = require('axios')

const createTest = async (req, res) => {
	const insta_user = req.body.insta_user
	const email = req.body.email
	const name = req.body.name
	console.log(req)
	console.log('chegou aqui')
	if (await TestData.findOne({ insta_user })) {
		return res.status(400).json({ error: 'Insta profile already tested' })
	}

	const url = 'https://painelseguidores.com.br/api/v2'
	axios
		.post(url, {
			key: process.env.API_KEY,
			action: 'add',
			service: '207',
			link: `http://instagram.com/${insta_user}`,
			quantity: 20
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
