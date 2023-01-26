const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes'));
app.use('/api/datos', require('./routes/datos'));
app.use('/api/ciudades', require('./routes/ciudades'));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});