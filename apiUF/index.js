import colecaoUf from "./dados/dados.js";
import express from 'express';

const app = express();

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
});

app.get('/ufs/:idUF', (req, res) => {
    const idUF = parseInt(req.params.idUF);
    const uf = colecaoUf.find(u => u.id === idUF);
    res.json(uf);
})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado na porta 8080 em' + data);

})