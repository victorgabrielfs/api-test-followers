const mongoose = require('mongoose')
const { Schema } = mongoose

const testSchema = new Schema(
	{
		name: String,
		email: String,
		phone: String,
		insta_user: String
	},
	{ timestamps: true }
)

const TestData = mongoose.model('sample_test', testSchema)

module.exports = TestData
