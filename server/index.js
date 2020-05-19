const express = require('express')
const app = express()
const ctrl = require('./controllers/books_controller')
const SERVER_PORT = 4000

//#region MiddleWare
app.use(express.json())
app.use(express.static(__dirname + '/../build'))

//#region GET endpoints
app.get('/api/books', ctrl.read)

//#endregion

//#region POST endpoints
app.post('/api/books', ctrl.create)

//#endregion

//#region PUT endpoints
app.put('/api/books/:book_id', ctrl.update)

//#endregion

//#region DELETE endpoints
app.delete('/api/books/:book_id', ctrl.delete)

//#endregion

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))