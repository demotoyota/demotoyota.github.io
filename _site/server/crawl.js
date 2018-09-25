const path = require('path')
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')

const createDataCarJson = require('./create-data-car-json.js')
const createFileCarMd = require('./create-file-car-md.js')
const downloadFile = require('./downloadFile.js')
const getDongXe = require('./get-dong-xe.js')

const links = fs.readFileSync('./cars.txt', { encoding: 'utf8' }).split('\n')
const link = links[0]
const getData = url => axios.get(url).then(res => res.data)

const getFilePath = file => {
    const fileInfo = path.parse(file)
    let ext = path.extname(file)
    let { dir, name } = fileInfo
    ext = ext.slice(0, 4)
    dir = dir.replace('http://www.toyota.com.vn/', '')
    dir = dir.replace('/_', '/')
    dir = dir.slice(1)
    const newPath = '../' + dir + '/' + name + ext
    return newPath
}
const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
getData(link)
    .then(async body => {
        const $ = cheerio.load(body)

        const moTaXe = $('#sec_dt_01')
        const ten_xe = $('#spTitleCar').text().trim()
        const dong_xe = getDongXe(ten_xe)
        const gia_xe = $('.price_detail').html().trim()
        const sapos = []
        $(moTaXe).find('.txt_dt').each((index, item) => {
            const sapo = $(item).text().trim()
            sapos.push(sapo)
        })

        const banner_data = $('.banner_img .img img').data()
        let banner = banner_data.original
        await downloadFile(banner, getFilePath(banner))
        banner = getFilePath(banner)


        let thong_tin_xe = []
        $(moTaXe).find('.txt_dt_2 span').each((index, item) => {
            thong_tin_xe.push($(item).text().trim())
        })
        thong_tin_xe = thong_tin_xe.slice(0, 4)
        const colors = []
        const colors_span = $('.list-color ul li span')
        for (let i = 0; i < colors_span.length; i++) {
            let color = colors_span[i]
            const colorData = $(color).data()
            const style = $(color).attr('style')
            colorData.style = style
            const { img } = colorData
            const newPath = getFilePath(img)
            colorData.img = newPath
            colors.push(colorData)
            await downloadFile(img, newPath)
        }
        // Dong xe
        const cac_mau_xe_khac = []
        $("#sec_dt_02 .item_sm").each((index, element) => {
            let item_name = $(element).find('.name_sm')[0]
            item_name = $(item_name).text().trim()
            let item_price = $(element).find('.price')[0]
            item_price = $(item_price).html().trim()
            let item_image = $(element).find('.img a img').attr('data-original')
            let item_href = $(element).find('.img a').attr('data-href')
            cac_mau_xe_khac.push({ item_name, item_price, item_image, item_href })
        })
        // Thu Vien
        const thuvien1 = []
        const thuvien1s = $('.list_01 div a img')
        for (let i = 0; i < thuvien1s.length; i++) {
            let image = thuvien1s[i]
            const img = $(image).data().original
            const newPath = getFilePath(img)
            thuvien1.push(newPath)
            await downloadFile(img, newPath)
        }
        const thuvien2 = []
        const thuvien2s = $('.list_02 div a img')
        for (let i = 0; i < thuvien2s.length; i++) {
            let image = thuvien2s[i]
            const img = $(image).data().original
            const newPath = getFilePath(img)
            thuvien2.push(newPath)
            await downloadFile(img, newPath)
        }

        // Begin ngoai that
        const ngoaithat = $('#sec_dt_04')
        let ngoaithat_title = $(ngoaithat).find('.txt_dt')
        ngoaithat_title = $(ngoaithat_title).text().trim() || ''
        let ngoaithat_description = $(ngoaithat).find('.txt_dt_2')
        ngoaithat_description = $(ngoaithat_description).text().trim() || ''
        let ngoaithat_thumb = $(ngoaithat).find('.img_banner img').data() || ''
        ngoaithat_thumb = ngoaithat_thumb.original || ''
        if (ngoaithat_thumb) {
            await downloadFile(ngoaithat_thumb, getFilePath(ngoaithat_thumb))
            ngoaithat_thumb = getFilePath(ngoaithat_thumb)
        }
        const ngoaithat_images = []
        const ngoaithat_images_items = $(ngoaithat).find('.slide_sm .item')
        for (let i = 0; i < ngoaithat_images_items.length; i++) {
            let item = ngoaithat_images_items[i]
            let img = $(item).find('img')[0]
            img = $(img).data().src
            const newPath = getFilePath(img)
            let text = $(item).find('.txt_sl')[0]
            text = $(text).text()
            ngoaithat_images.push({ img: newPath, text })
            await downloadFile(img, newPath)
        }

        const ngoai_that_data = {
            title: ngoaithat_title,
            description: ngoaithat_description,
            thumb: ngoaithat_thumb,
            images: ngoaithat_images
        }
        // End ngoai that

        // Begin noi that
        const noithat = $('#sec_dt_05')
        let noithat_title = $(noithat).find('.txt_dt')
        noithat_title = $(noithat_title).text().trim() || ''
        let noithat_description = $(noithat).find('.txt_dt_2')
        noithat_description = $(noithat_description).text().trim() || ''
        let noithat_thumb = $(noithat).find('.img_banner img').data().original
        await downloadFile(noithat_thumb, getFilePath(noithat_thumb))
        noithat_thumb = getFilePath(noithat_thumb)
        const noithat_images = []
        const noithat_images_items = $(noithat).find('.slide_sm .item')
        for (let i = 0; i < noithat_images_items.length; i++) {
            let item = noithat_images_items[i]
            let img = $(item).find('img')[0]
            img = $(img).data().src
            const newPath = getFilePath(img)
            let text = $(item).find('.txt_sl')[0]
            text = $(text).text()
            noithat_images.push({ img: newPath, text })
            await downloadFile(img, newPath)
        }
        const noi_that_data = {
            title: noithat_title,
            description: noithat_description,
            thumb: noithat_thumb,
            images: noithat_images
        }
        // End noi that

        // Begin Tinh nang noi bat
        const van_hanh = []
        const van_hanh_items = $('#tab_vh_01 ul .item a .inner')
        for (let i = 0; i < van_hanh_items.length; i++) {
            let van_hanh_item = van_hanh_items[i]
            let van_hanh_image = $(van_hanh_item).find('img')[0]
            van_hanh_image = $(van_hanh_image).data().src
            let van_hanh_title = $(van_hanh_item).find('.txt1')[0]
            van_hanh_title = $(van_hanh_title).text().trim() || ''

            let van_hanh_description = $(van_hanh_item).find('.txt2')[0]
            van_hanh_description = $(van_hanh_description).text().trim() || ''
            van_hanh.push({ image: getFilePath(van_hanh_image), title: van_hanh_title, description: van_hanh_description })
            await downloadFile(van_hanh_image, getFilePath(van_hanh_image))
        }
        const an_toan = []
        const an_toan_items = $('#tab_vh_03 ul .item a .inner')
        for (let i = 0; i < an_toan_items.length; i++) {
            let an_toan_item = an_toan_items[i]
            let an_toan_image = $(an_toan_item).find('img')[0]
            an_toan_image = $(an_toan_image).data().src
            let an_toan_title = $(an_toan_item).find('.txt1')[0]
            an_toan_title = $(an_toan_title).text().trim() || ''
            let an_toan_description = $(an_toan_item).find('.txt2')[0]
            an_toan_description = $(an_toan_description).text().trim() || ''
            an_toan.push({ image: getFilePath(an_toan_image), title: an_toan_title, description: an_toan_description })
            await downloadFile(an_toan_image, getFilePath(an_toan_image))
        }
        const tinh_nang_noi_bat = { van_hanh, an_toan }
        // End Tinh nang noi bat


        // Begin Thong so ky thuat
        let thong_so_ky_thuat = []
        const tskt = $('.thong_so_ky_thuat')
        $(tskt).find('ul li a').each((index, tab) => {
            const attr = $(tab).attr()
            let { href, title } = attr
            const body = []
            $(tskt).find(`${href} .lv1`).each((i, tr) => {
                let tds = []
                $(tr).find('td').each((i_td, td) => {
                    tds.push($(td).text().trim())
                })
                tds = tds.filter((item, index) => index != 2)
                tds.pop()
                body.push(tds)
            })
            href = href.replace('#', '')
            thong_so_ky_thuat.push({ title, href, body })
        })
        // End Thong so ky thuat

        // Begin catalouge
        const catalouge = []
        const catalouge_items = $('.list_catalogue .item_ct a')
        for (let i = 0; i < catalouge_items.length; i++) {
            let file = catalouge_items[i]
            let link = $(file).attr('href')
            link = link.slice(14)
            let newPath = getFilePath(link)
            let file_name = $(file).find('.file_name')[0]
            let title = $(file_name).text().trim()
            catalouge.push({ title, link: newPath })
            await downloadFile(link, newPath)
        }
        // End catalouge

        const data = {
            ten_xe,
            dong_xe,
            gia_xe,
            sapos,
            banner,
            thong_tin_xe,
            colors,
            cac_mau_xe_khac,
            thuvien1,
            thuvien2,
            ngoai_that_data,
            noi_that_data,
            tinh_nang_noi_bat,
            thong_so_ky_thuat,
            catalouge
        }
        const url = link.replace('http://www.toyota.com.vn/', '')
        createDataCarJson(url, data)
        createFileCarMd(url)
        return 1
    })
    .catch(e => console.log(e + ''))

