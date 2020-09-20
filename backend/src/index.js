const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const UserRoute = require('./routes/user.route');

app.use('/user', UserRoute);

app.listen(9000, () => {
    console.log("API online");
});