const client = require('./connectionToDB')

class List {
  readList() {
    return client.query(`SELECT * FROM lists `)
  }

  createList(req) {   
    return client.query(`INSERT INTO lists (lists_names) VALUES ($1)`, [req.body.name])
  }

  updateList (id, body) {
    return client.query(`UPDATE lists SET lists_names=$1 WHERE list_id=${id}`, [body.name])
  }

  deleteList (id) {
    return client.query(`DELETE from lists WHERE list_id=${id}`)
  }
}


let list = new List()
module.exports = list