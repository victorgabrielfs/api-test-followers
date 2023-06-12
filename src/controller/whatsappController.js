const client = require('../wpp-connection')
const whatsTest = async (req, res) => {
	if (req.body.key !== process.env.WPP_API_KEY) {
		return res.status(400).send({ message: 'Not authorized' })
	}

	const text = req.body.text.replace(/\\n/g, '\n')

	const rawNumber = req.body.phone
	const number =
		'55' +
		rawNumber.replace('(', '').replace(')', '').replace(' ', '').replace('-', '')

	if (number.length !== 13 && number[4] !== '9') {
		return res.status(404).send('Invalid number')
	}

	// create a new variable from the number variable, but without the 9 in the 5th position
	const numberWithout9 = number.slice(0, 4) + number.slice(5)

	const chatId = number + '@c.us'
	const chatId2 = numberWithout9 + '@c.us'
	try {
		client.sendMessage(chatId, text)
		client.sendMessage(chatId2, text)
		return res.send({ message: 'Message sent' })
	} catch (err) {
		console.log(err)
		return res.status(400).send({ message: 'Error on send message' })
	}
}
module.exports = whatsTest
