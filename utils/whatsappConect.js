const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { generateImage } = require('./generateImg');
const { default: axios } = require('axios');

const client = new Client({
   });


client.on('qr', qr => generateImage(qr, () => {
    qrcode.generate(qr, { small: true });
   // console.log(`Ver QR http://localhost:2001/qr`)
   
}))

client.on('ready', () => {
  
  console.log(`El cliente conectado`);  
})


client.on('message', async msg => {
    const{from,body} = msg    
    const {data} = await axios.post('https://dialogflow.tecnologicosetc.com/api/v1/dialogflow/', { message : body })
    client.sendMessage(from, data.replyMessage)
    console.log(data.replyMessage);
    
})

/*const client2 = new Client({
    authStrategy: new LocalAuth({ clientId: "client-two" })
});/*


const session = async ( session ) => {    
    await Session.create({client: session})
}



/*client.on('message', msg => {
    client.sendMessage(msg.from, 'hola')
})*/

const sendMsg = (cliente, to , message) => { 
    let number = `${to}@c.us`
    cliente.sendMessage(number, `*Mensaje Automatico*\n\n${message}`)
    console.log(number);
};

//console.log(client);

/*client2.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true})    
});

client2.on('ready', () => {
    console.log('Client 2 is ready!');
});

client2.on('message', msg => {
    if (msg.body == '!ping') {
        msg.reply('pong');
    }
});*/

//client2.initialize();



module.exports = { client, sendMsg }