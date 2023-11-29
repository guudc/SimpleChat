const openai = require('../configs/config').openai
exports.prompt = async (req, res) => {
    req = req.body
    try{
    const completion = await openai.chat.completions.create({
        model: "text-davinci-003",
        prompt: req.prompt,
        max_tokens:200
      });
    res.send({ message: completion.data.choices[0].text })
    }
    catch(e) {
        res.send({message: "Oops, service unavailable"})
    }
}
 