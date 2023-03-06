const cors = require('cors');
const express = require('express');
const productRoutes = require('./routes/productRoutes');
const stripeRoute = require('./routes/stripeRoutes');
const orderRoute = require('./routes/orderRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
require('dotenv').config();

//Create the service (app obejct is just a callback)
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Backend.');
});

//HTTPS
const options = {
    key: fs.readFileSync(__dirname + '/file.key'),
    cert: fs.readFileSync(__dirname + '/file.crt')
};
//Connect to MongoDB
connectDB();

//CORS
app.use(
    cors({
        origin: true,
        allowedHeaders: ['Authorization', 'X-Requested-With', 'Content-Type'],
        credentials: true
    })
);
app.use(express.json(), cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//Routes
// app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', stripeRoute);
app.use('/api', orderRoute);

//SendGrid
app.use('/api', require('./routes/emailSenderRoutes'));

//Secrets
app.get('/', (req, res) => {
    return res.status(200).json({
        MONGO_PORT,
        MONGO_URI,
        SENDGRID_API_KEY,
        STRIPE_API_KEY
    });
});

// Listen for requests
const PORT = process.env.PORT || 5005;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

https.createServer(options, app).listen(5005);
// listen(PORT, () => console.log(`Server running on port ${PORT}`));
