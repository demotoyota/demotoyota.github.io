const fs = require('fs')
const _ = require('lodash')

// Function add to tags.json
function add_tag(tag_name) {
    tag_name = tag_name.trim()
    let tag = { name: tag_name, slug: generate_slug(tag_name) }
    let tags = fs.readFileSync('../_data/tags.json').toString()
    tags = JSON.parse(tags)
    tags.push(tag)
    tags = _.uniqBy(tags, 'slug')
    fs.writeFileSync('../_data/tags.json', JSON.stringify(tags))
}

// Function create file tag.md

function create_file_tag(tag_name) {
    tag_name = tag_name.trim()
    let slug = generate_slug(tag_name)
    let data = `---
layout: tag
banner-title: ${tag_name}
description: Tổng hợp các bài viết được gắn nhãn ${tag_name}
tag_name: ${tag_name}
permalink: /tag/${slug}
---`
    fs.writeFileSync(`../tag/${slug}.md`, data)
}
function generate_slug(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.split(' ').join('-')
    str = str.trim();
    return str;
}


module.exports = {
    add_tag,
    create_file_tag
}