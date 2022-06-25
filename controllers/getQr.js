const { catchAsync } = require("../utils/catchAsync");
const http = require('http'); 
const fs = require('fs')

console.log(__dirname);

const getQr = catchAsync( async ( req,res,next) => {
     res.writeHead(200, { 'content-type': 'image/svg+xml' });
     fs.createReadStream(`${__dirname}/../utils/qr-code.svg`).pipe(res);
   
})


module.exports = { getQr }