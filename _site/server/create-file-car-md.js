const fs = require('fs')

const createFileCarMd = url => {
    fs.writeFileSync(`../car/${url}.md`, `---
layout: car
permalink: ${url}
---`)
}

module.exports = createFileCarMd