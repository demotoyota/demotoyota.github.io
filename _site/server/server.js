const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors')
const { json } = require('body-parser')

app.use(cors())
app.use(json())
// Tai file ho tro tai chinh
app.post('/export-files-estimate', (req, res) => {
    const data = req.body
    axios({
        method: 'post',
        url: 'http://www.toyota.com.vn/export-files-estimate',
        data
    })
        .then(response => res.json(response.data))
        .catch(e => console.log(e + ''))
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server is running on port ' + port))