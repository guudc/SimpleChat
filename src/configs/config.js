const OpenAI  = require('openai')
const api_key = "<OPENAI_API_KEY>"
const openai = new OpenAI({ apiKey: api_key })
exports.openai = openai
