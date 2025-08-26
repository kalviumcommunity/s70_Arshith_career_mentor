const express = require('express');
const app = express();
require('dotenv').config();

const careerRoutes = require('./routes/career');

app.use(express.json());
app.use('/api', careerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
