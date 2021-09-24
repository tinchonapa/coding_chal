const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// route import
const reportRoutes = require('./routes/reports');

// ExpressJS app setup
const app = express();
const PORT = process.env.PORT || 5000;

// list of endpoints allowed to make requests to this backend via CORS
const whitelist = ['http://localhost:3000', 'http://172.19.143.193:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}

// setup middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use('/report', reportRoutes);

const CONNECTION_URL = '';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
