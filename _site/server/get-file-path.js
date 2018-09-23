const path = require('path')

const getFilePath = file => {
    const fileInfo = path.parse(file)
    let ext = path.extname(file)
    let { dir, name } = fileInfo
    ext = ext.slice(0, 4)
    dir = dir.replace('http://www.toyota.com.vn/', '')
    dir = dir.replace('/_', '/')
    dir = dir.replace(' ', '-')
    const newPath = dir + '/' + name + ext
    return newPath
}

module.exports = getFilePath