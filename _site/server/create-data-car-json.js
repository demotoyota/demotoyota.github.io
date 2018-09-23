const fs = require('fs')

const createDataCarJson = (url, data) => {
    fs.writeFileSync(`../_data/cars/${url}.json`, JSON.stringify(data))
}
module.exports = createDataCarJson