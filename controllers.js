require("../databaseconfig/db")
const schema = require("../schemas/schema")


exports.postData = async(req, res) => {
    const username = req.body.username
    const email = req.body.email
    const user = new schema()
    user.username = username
    user.email = email
    try {
        await user.save((err, result) => {
            if (result) {
                res.send(result)
                res.end()

            }

        })

    } catch (err) {
        res.send(err)
        res.end()
    }

}