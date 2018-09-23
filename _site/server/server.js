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
app.get('*', (req, res) => {
    const baseurl = 'http://api.test.toyota.byte.vn'
    const { path } = req
    console.log(baseurl+path)
    axios({
        method: 'get',
        url: baseurl + path,
        headers: {
            "Authorization": "X-XSRF-Token true",
            "Host":"api.test.toyota.byte.vn",
            "Origin":"http://www.toyota.com.vn"
        }
    })
        .then(res => console.log(res.data))
    return res.json({ a: 3 })

})
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server is run ning on port ' + port))