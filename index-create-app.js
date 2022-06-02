const express = require('express');
const router = require('./lib/routes/index')

const PORT = process.env.PORT || 3000


const app = express();
app.use(express.json());
app.use('/api', router);


(async () => {
    try {
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    }catch (e) {
        console.log(e.message);
    }
})()
