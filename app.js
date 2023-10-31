const express = require('express');
const app = express();
const port = 3000;

app.get('/sumar/:a/:b', (req, res) => {
  const a = parseFloat(req.params.a);
  const b = parseFloat(req.params.b);
  const resultado = a + b;
  res.send(`El resultado de la suma es: ${resultado}`);
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
