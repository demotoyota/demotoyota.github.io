const fs = require('fs')
const cheerio = require('cheerio')
const axios = require('axios')
const linkTinTucs = fs.readFileSync('./tintucs.txt').toString().split('\n')
start()
async function start() {
    for (let linkTinTuc of linkTinTucs) {
        await crawlTinTuc(linkTinTuc)
        console.log('Done', linkTinTuc)
    }
}


function crawlTinTuc(linkTinTuc) {

    return new Promise((resolve, reject) => {
        const filename = linkTinTuc.slice(45)

        axios.get(linkTinTuc)
            .then(res => res.data)
            .then(html => {
                const $ = cheerio.load(html)
                const cttintuc = $('.cttintuc').html()
                saveTinTuc(cttintuc, filename)
                resolve(linkTinTuc)
            })
            .catch(e => reject(e + ''))
    })

}



function saveTinTuc(html, filename) {
    fs.writeFileSync(`../tintuc/${filename}.html`, `---
layout: default
permalink: tin-tuc/tin-su-kien/${filename}
---
${html}
`)
}