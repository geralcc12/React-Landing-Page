const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

// Usando CORS para la correcta comunicación entre el puerto 3000 del frontend y 5000 del backend
app.use(cors());

app.use(express.json());
// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/Website', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Esquema de servicios
const servicioSchema = new mongoose.Schema({
  nombre: String,
  dscp: String,
  imagen: String,
});

// Modelo de servicio
const Servicio = mongoose.model('Servicio', servicioSchema);

// Endpoint para obtener servicios
app.get('/api/servicios', async (req, res) => {
  try {
    const servicios = await Servicio.find();
    res.json(servicios);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Endpoint para enviar email
app.post('/api/servicios', async (req, res) => {
  console.log(req.headers); 
  console.log(req.body); // Verificar qué datos están llegando al backend
    const { name, email, message } = req.body;
  // datos para el remitente del correo
const correo = 'gcasasmaldo@gmail.com';
const contra = 'pflx xabn mrti enan';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: correo,
    pass: contra
  },
});

const mailOptions = {
  from: ' Geral Casas Maldonado  <gcasasmaldo@gmail.com>',
  to: 'Geral Casas Maldonado <geral.casasm@gmail.com>',
  subject: 'Contacto desde la web',
  html: `<h1>Contacto desde la web</h1>
  <p>Nombre: ${name}</p>
  <p>Correo: ${email}</p>
  <p>Mensaje: ${message}</p>`
};

transporter.sendMail(mailOptions, (error, info) => {

  if(error){
    console.log(error.message)
  }
  else {
    console.log(`Email enviado exitosamente -> ${mailOptions.to}`);
    res.json({ message: 'Correo enviado exitosamente' });
  }
})
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
