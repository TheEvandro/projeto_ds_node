const express = require("express");

const app = require('./src');

const PORT = 3000;

<<<<<<< HEAD
=======
app.get("/", (req, res) => {
    res.send("API funcionando!");
});
>>>>>>> 6ffc7afb0f3aa990c1e5d6b63eca578cf04c34f5

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});