const TaskModel = require('../models/taskModel');

const taskController = {
    async listTask(req, res) {
        try {
            const task = await TaskModel.findAll();
            res.render('index', { task });
        } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao buscar tarefas')
        }
    }
}

module.exports = taskController;