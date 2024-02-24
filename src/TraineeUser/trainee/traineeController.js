var traineeService = require('./traineeService.js')
// Определение асинхронной функции для создания ученика
var createTraineeControllerFn = async (req, res) => {
    try {
        console.log(req.body)
        var status = await traineeService.createTraineeDBService(req.body)
        console.log(status)

        if (status)
        res.send({ "status": true, "message": "User created" })
        else
        res.send({ "status": false, "message": "Error created" })
    } catch (err) {
        console.log(err);
    }    
}
// Определение асинхронной функции для входа ученика в систему
var loginTraineeControllerFn = async (req, res) => {
    var result = null
    try {   
        result = await traineeService.loginTraineeDBService(req.body)
        if(result.status)
        res.send({"status": true, "message": result.msg, "role": result.role, "id": result.id})
        else
        res.send({"status": false, "message": result.msg})
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createTraineeControllerFn, loginTraineeControllerFn }
