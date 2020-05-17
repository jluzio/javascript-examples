import _ from 'lodash'
import express from 'express'

const port = 4444
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
