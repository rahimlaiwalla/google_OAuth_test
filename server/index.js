const express = require('express');

const PORT = 3000;

const app = express();


app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(__dirname + '/../dist'));

app.get('/login',
  (req, res) => {
    res.render('login')
  }
)

app.listen(PORT, () => console.log('Express server started on ', PORT));