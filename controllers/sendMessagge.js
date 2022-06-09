const { catchAsync } = require('../utils/catchAsync');
const { client, sendMsg } = require('../utils/whatsappConect');


const sendMessage = catchAsync(async (req, res, next) => {
 const { message, phone, time } = req.body

 console.log(time*60*1000);
 //client.on( () => {client.sendMessage('34641009503@c.us', message)})
 if (time) {
    setTimeout( () =>{
        sendMsg(client, phone, message)
        console.log('El mensaje programdo fue enviado');  
     }, time*60*1000 )
    
 }else{
    sendMsg(client, phone, message)  
 }

 console.log(message, phone);

 res.status(200).json({ status : 'success'})
});

module.exports = { sendMessage };
