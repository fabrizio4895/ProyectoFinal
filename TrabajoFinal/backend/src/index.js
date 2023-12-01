import express from 'express';
import bodyParser from 'body-parser'
import usuarioRoutes from './routes/usuario.js';
import libroRoutes from './routes/libro.js'
import reservaRoutes from './routes/reserva.js'

var app = express(); //app representa a nuestro aplicativo web

//para que utilize el body-parser, este ayuda a que el API pueda reconocer el cuerpo de los "usuario" creados
app.use(bodyParser.json())

//Se recibe la petición con get
//Cada que corra la página, aparecerá el result:'ok'
app.get('/',(req,res) => {
    return res.json({ result: 'OK'})
});

//El use para especificar que utilice la ruta con este endpoint
app.use("/usuario", usuarioRoutes);
app.use("/libro", libroRoutes);
app.use("/reserva", reservaRoutes);


app.listen(3001, () => {
    console.log('Servidor iniciado.')
})