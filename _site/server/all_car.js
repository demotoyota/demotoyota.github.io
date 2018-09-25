const fs = require('fs')
const cars = fs.readdirSync('../_data/cars').map(item => 'http://www.toyota.com.vn/' + item.slice(0, -5))
fs.writeFileSync('./cars.txt', cars.join('\n'))
console.log(cars.length)