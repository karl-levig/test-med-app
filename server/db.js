const mongoose = require('mongoose');

// Format kòrèk: mongodb://USERNAME:PASSWORD@HOST:PORT
const mongoURI = "mongodb://root:Ip3nkwYBqDFR4I5A0EXWGKWA@172.21.112.136:27017";

const connectToMongo = async (retryCount) => {
    const MAX_RETRIES = 3;
    const count = retryCount ?? 0;
    try {
        await mongoose.connect(mongoURI, { dbName: 'stayhealthybeta1' });
        console.info('Connected to Mongo Successfully');
        return;
    } catch (error) {
        console.error(error);
        const nextRetryCount = count + 1;
        if (nextRetryCount >= MAX_RETRIES) {
            throw new Error('Unable to connect to Mongo!');
        }
        console.info(`Retrying, retry count: ${nextRetryCount}`);
        return await connectToMongo(nextRetryCount);
    }
};

module.exports = connectToMongo;
