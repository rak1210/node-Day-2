const express = require('express');
const app = express();
const port = 3000;

//GET Menu
app.get('/menu', (req, res )=>{
    const newItem = req.query.newItem;
    res.send (`Menu: Small Lemonade, Medium Lemonade, Large Lemonade ${newItem}`);
});

app.post('/order', (req, res) =>{
    const size = req.query.size;
    res.send(`thank you order received: ${size}`)
})

app.listen(port, () =>{
    console.log(`Lemonade stand Listening at http://localhost:${port}`)
})