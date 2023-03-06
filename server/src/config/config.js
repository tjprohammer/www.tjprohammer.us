require('dotenv').config();

dotenv.config();

//MONGO DATABASE FOR USER LOGIN
// const MONGO_OPTIONS = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     autoIndex: false,
//     retryWrites: false
// };

const MONGO_USERNAME = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const MONGO_HOST = process.env.MONGO_HOST || '';
const MONGO_URI = process.env.MONGO_URI || '';

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URI
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.PORT || '5000';

//AWS CREDENTIALS
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
const AWS_BUCKET = process.env.AWS_BUCKET;
const AWS_REGION = process.env.AWS_REGION;

const AWS_S3 = {
    key: AWS_ACCESS_KEY_ID,
    secret: AWS_SECRET_ACCESS_KEY,
    bucket: AWS_BUCKET,
    region: AWS_REGION
};

//SERVER INFO
const SERVER = {
    host: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mongo: MONGO,
    server: SERVER,
    aws: AWS_S3
};

export default config;
