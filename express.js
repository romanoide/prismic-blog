const express = require('express'),
app = express(),
path = require('path')
app.set('port', (process.env.PORT || 5000))
app.use(express.static('dist'))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})
app.listen(app.get('port'), function () {
  console.log('App listening on port ',app.get('port'))
});