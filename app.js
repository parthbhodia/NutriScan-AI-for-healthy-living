const express = require('express');
const app = express();
const path = require('path');
// import Quagga from 'quagga'; // ES6
const Quagga = require('quagga').default; // Common JS (important: default)
app.use(express.static(path.join(__dirname, 'public')));
  // Route to handle redirecting to the result page with the scanned barcode content as a query parameter
  app.get('/result', function(req, res) {
    const barcode = req.query.barcode;
    console.log(barcode);
    res.sendFile(path.join(__dirname, 'public', 'result.html'));
  });
app.get('/', function(req, res) {
//   res.send('Hello, world!');
res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(14000, function() {
  console.log('App listening on port 4000!');
});
