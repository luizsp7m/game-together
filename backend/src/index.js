const express = require('express');
const app = express();
app.use(express.json());

const UserRoute = require('./routes/user.route');

app.use('/user', UserRoute);

app.listen(3000, () => {
    console.log("API online");
});