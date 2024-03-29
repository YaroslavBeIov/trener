var trenerService = require('./trenerService.js')
// Определение асинхронной функции для создания тренера
var createTrenerControllerFn = async (req, res) => {
    try {
        console.log(req.body)
        var status = await trenerService.createTrenerDBService(req.body)
        console.log(status)

        if (status)
        res.send({ "status": true, "message": "User created" })
        else
        res.send({ "status": false, "message": "Error created" })
    } catch (err) {
        console.log(err);
    }    
}
// Определение асинхронной функции для входа тренера в систему
var loginTrenerControllerFn = async (req, res) => {
    var result = null
    try {
        result = await trenerService.loginTrenerDBService(req.body)
        if(result.status)
        res.send({"status": true, "message": result.msg, "role": result.role, "id": result.id})
        else
        res.send({"status": false, "message": result.msg})
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createTrenerControllerFn, loginTrenerControllerFn }
