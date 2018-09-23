const fs = require('fs')
let path = '../assets/img/upload/2017/08/suoi-nuoc-mooc'
fs.readdirSync(path).forEach(img => {
    let newimg = img.replace('(', '')
    newimg = newimg.replace(')', '')
    newimg = newimg.replace(' ', '-')
    fs.renameSync(path + '/' + img, path + '/' + newimg)
})
