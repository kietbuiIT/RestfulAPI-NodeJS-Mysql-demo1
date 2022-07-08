const express = require('express');
const app = express();

require('dotenv').config();

const programmingLanguagesRouter = require('./routes/programmingLanguages')

const PORT = process.env.PORT;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
)

app.get('/', (req, res, next) => {
    res.status(200).json({
        status: "oke",
        message: "Hello world"
    })
})

app.use("/programming-languages", programmingLanguagesRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message});
    return;
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);

})