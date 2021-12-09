const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = __dirname + '/app/views';

const app = express();

app.use(express.static(path));

var corsOptions = {
    origin: 'http://localhost:8081'
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db');
});

require('./app/routes/tutorial.routes.js')(app);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});