import 'reflect-metadata';
import 'cors';
import { useContainer as typeormUseContainer, createConnection } from 'typeorm';
import { Container } from 'typedi';
import { createExpressServer, useContainer as routingUseContainer } from 'routing-controllers';
import { UserController } from './controllers/user.controller';
import { AreaController } from './controllers/area.controller';


typeormUseContainer(Container)
routingUseContainer(Container)

const port = process.env.PORT || 3000;

const app = createExpressServer({
    cors: true,
    controllers: [UserController, AreaController],
    classTransformer: true,
    validation: true
});

app.listen(port, () => {
    console.log("User service listening on port " + port);
})

createConnection()
.then(async connection => {
    console.log("Database connection started successfully");
})
.catch(error => console.log(error))