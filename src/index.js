const express = require('express');
const app = express();

//Puerto
app.set('port', 3000);

//Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//Llama rutas
app.use('/api/fizzbuzz',require('./routes/fizzbuzz'));

//Iniciar servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});