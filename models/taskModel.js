const client = require('./connectionToDB')

class Task {
  readTask() {
    return client.query(`SELECT * FROM tasks `)
  }

  createTask (body) {
    let fields = Object.entries(body)
    let fNames = fields.map(f => f[0]).join()
    let fPlaceholders = fields.map((_, i) => '$' + (i + 1)).join()
    let fData = fields.map((d) => d[1])
    return client.query(`INSERT INTO tasks (${fNames}) VALUES (${fPlaceholders}) RETURNING*`, fData)
  }

  updateTask (body, id) {
    let fields = Object.entries(body)
    let fNamesAndPlaceholders = fields.map(([f,_], i) => `${f} = \$${i + 1}`).join()
    let fData = fields.map((d) => d[1])
    return client.query(`UPDATE tasks SET ${fNamesAndPlaceholders} WHERE task_id=${id} RETURNING*`, fData)
  }

  deleteTask (req) {
    let id = req.id
    return client.query(`DELETE from tasks WHERE task_id=${id}`)
  }
}


let task = new Task()
module.exports = task