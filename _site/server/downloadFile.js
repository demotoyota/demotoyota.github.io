const fs = require('fs')
const path = require('path')
request = require('request')
const mkdirp = require('mkdirp')
const getFilePath = require('./get-file-path')

const download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

const createDir = dir => {
  return new Promise((resolve, reject) => {
    mkdirp(dir, (err) => {
      console.log('create dir', dir)
      if (err) return reject(err)
      resolve(1)
    })
  })
}

const downloadFile = (file, filepath) => {
  return new Promise(async (resolve, reject) => {
    let { dir } = path.parse(filepath)
    try {
      if (!fs.existsSync(dir)) {
        await createDir(dir)
      }
      download('http://www.toyota.com.vn' + file, filepath, () => {
        console.log('Downloaded', file, filepath)
        resolve(filepath)
      })
    } catch (error) {
      reject(error + '')
    }
  })
}
const images = fs.readFileSync('./images.txt', { encoding: 'utf8' }).split('\n')
start()
async function start() {
  for (let image of images) {
    await downloadFile(image, '../' + getFilePath(image))
  }
}
module.exports = downloadFile