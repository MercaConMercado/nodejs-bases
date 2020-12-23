var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  //service: 'gmail', // servidor gmail reconoce
  host: "mail.exacthosting.com",
    port: 465,
    secure: true, // true for 465, false for other ports
  auth: {
    user: 'soportesistemas@aireflex.com',  // ojo que el gmail debe tener desactivada la opcion de enviar correos de aplicaciones inseguras
    pass: '41r3fl3x_2019*.'
  }
});

var mailOptions = {
  from: 'soportesistemas@aireflex.com',
  to: 'dmercado@sanmateo.edu.co,decodermc@gmail.com',
  subject: 'Correo Enviado',
  html: '<h1>Daniel Mercado</h1><a href="https://aireflex.com"><img src="https://www.aireflex.com/assets/logoaireflex1.JPG"></a><p>¿ Como seria ?</p>' // aqui html
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});n