const connect = require('../config/db');

class TaskModel {
    static async findAll() {
        const db = await connect();
        const [rows] = await db.execute('select * from tarefa');
        return rows;
    }
}

module.exports = TaskModel;