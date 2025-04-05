const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const port = 12925;

app.set('view engine', 'ejs');  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));  
app.use(methodOverride('_method'));  

const blogRoutes = require('./routes/blogRoutes');  
app.use('/', blogRoutes);  

app.listen(12925, () => {
  console.log('Server is running on http://localhost:12925');
});
