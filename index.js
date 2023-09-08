const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;


app.use(express.static('./assets'));
app.use('/', require('./routes '));
app.set('view engine','ejs');
app.set('view','./veiws');

app.listen(port, function(err){
    if(err){
        console.log('Error in running the server');
    }
    console.log('server is running on port', port);

});