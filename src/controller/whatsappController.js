const client = require('../wpp-connection')
const whatsTest = async (req, res) => {
	if (req.body.key !== process.env.WPP_API_KEY) {
		return res.status(400).send({ message: 'Not authorized' })
	}
	const text = req.body.text
	const rawNumber = req.body.phone
	const number =
		'55' +
		rawNumber
			.replace('(', '')
			.replace(')', '')
			.replace(' ', '')
			.replace('-', '')

	console.log(number)
	console.log(number.length)

	if (number.length !== 13 && number[4] !== '9') {
		return res.status(404).send('Invalid number')
	}

	const chatId = number + '@c.us'
	try {
		client.sendMessage(chatId, text)
		return res.send({ message: 'Message sent' })
	} catch (err) {
		console.log(err)
		return res.status(400).send({ message: 'Error on send message' })
	}
}
module.exports = whatsTest
