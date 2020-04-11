const express = require('express')
const path = require('path')
const app = express()

const CONTACTS = [
    {id: 1, name: 'Илья', value: '+380 677 00 00 00', marked: false}
]


app.use(express.static(path.resolve(__dirname, 'client')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(3000, () => console.log('Server started'))
