const path = require('path')
const express = requires('express');
const morgan = require('morgan')
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./routes/index.js'));
app.use((req,res)=>{
    res.status(404).end('404 no encontrado');
})

app.listen(app.get('port'),() => {
    console.log("Server escuchando en el puerto: ",app.get('port'));
});