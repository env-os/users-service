import express = require('express');
import { UsersService } from './services/users.service';
import { createConnection } from 'typeorm';
import bodyParser = require('body-parser');

const app: express.Application = express();
const usersService = new UsersService();


const connection = createConnection() // open db connection for all routes
app.use(bodyParser.json())

app.post('/create', (req, res) => {
    const test = usersService.create(
        req.body.uid,
        req.body.name,
        req.body.email,
        req.body.fullname,
        req.body.phone
    )
    res.send("User created successfully")
})

app.get('/get', async (req, res) => {
    const user = await usersService.getAllUsers()
    res.json(user)
})

app.get('/get/:username', async (req, res) => {
    const user = await usersService.getOneByUsername(req.params.username)
    res.json(user)
})

app.delete('/:username', (req, res) => {
    usersService.delete(req.params.username);
    res.send("User deleted successfully")
})

app.listen(process.env.PORT, function () {
    console.log("Users module is listening on port " + process.env.PORT +"!");
    
});