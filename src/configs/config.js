const OpenAI  = require('openai')
const api_key = "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"
const openai = new OpenAI({ apiKey: api_key })
exports.openai = openai
