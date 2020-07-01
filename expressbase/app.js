var express = require('express'); //importamos express

var app = express();//inicializamos express y guardamos todo en app (q seria nuestro metodo constructor)

// Defino la ruta inicial - nota: app ahora es una instancia de express
app.all( '/', function(peticion, respuesta) {
  respuesta.send('Hola'); //le envío al navegador como respuesta este string
})
// Defino una 2da ruta q solo funcionará si el usuario entra por el metodo get
app.get( '/acerca', function(peticion, respuesta) {
  respuesta.send('Acerca'); //le envío al navegador como respuesta este string
})
//para poner a funcionar nuesro servidor, le asignamos un puerto y le puedo entregar aqui una función si corresp.
var server = app.listen(3000, function () {
});


