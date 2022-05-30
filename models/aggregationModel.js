const client = require('./connectionToDB')

class Aggregation {
  count() {
    let date = new Date().toUTCString()
    return client.query(`SELECT COUNT(task_id)::INT FROM tasks WHERE due_date 
                                    BETWEEN '${date}' AND '${date}'`)
  }

  lists() {
    return client.query(`SELECT lists.name, COUNT(task_id)::INT, lists.list_id
                         FROM tasks RIGHT JOIN lists ON tasks.list_id = lists.list_id 
                         AND tasks.done = false GROUP BY lists.list_id, lists.name`)
  }
 
  today() {
    let date = new Date().toUTCString()
    return client.query(`SELECT lists.list_id, lists.name, tasks.task_id FROM tasks
                         RIGHT JOIN lists ON lists.list_id=tasks.list_id
                         WHERE due_date='${date}' 
                         AND tasks.done = false GROUP BY lists.list_id, lists.name, tasks.task_id`)
  }

  listsTrue(id) {
    return client.query(`SELECT * FROM tasks WHERE list_id=${id}`)
  }

  listsFalse(id) {
    return client.query(`SELECT * FROM tasks WHERE done=false AND list_id=${id}`)
  }

}


let agg = new Aggregation()
module.exports = agg


