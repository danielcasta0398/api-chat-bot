const qr = require('qr-image')
const fd = require('fs')

const generateImage = (base64, cb = () => {}) => {
    let qr_svg = qr.image(base64, { type: 'svg', margin: 4 });
    qr_svg.pipe(require('fs').createWriteStream(`${__dirname}/../utils/qr-code.svg`));    
    cb()
}

module.exports = { generateImage }