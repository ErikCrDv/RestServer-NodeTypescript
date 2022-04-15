import express, { Application } from 'express';
import cors from 'cors';

import userRouter from '../routes/user';
import database from '../database/connection';

class Server {

    private app: Application;
    private port: string;
    
    //Routes
    private apiPaths = {
        users: '/api/users'
    };

    constructor(){
        // Config
        this.port = process.env.PORT || '3000';
        // AppServer
        this.app = express();
        // Database
        this.dbConnection();
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }

    async dbConnection(){
        try {
            await database.authenticate();
            console.log('Database Online!');
        } catch ( error ) {
            throw new Error( String( error ) );
        }
    }

    middlewares(){
        // CORS
        this.app.use( cors( {} ) );
        // Body
        this.app.use( express.json() );
        // Public
        this.app.use( express.static('public') );

        // // Files Uploads (express-fileupload)
        // this.app.use( fileUpload({
        //     useTempFiles : true,
        //     tempFileDir : '/tmp/',
        //     createParentPath: true
        // })); 
    }

    routes(){
        this.app.use( this.apiPaths.users, userRouter )
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Server running on port ${ this.port }`);
        })
    }

}

export default Server;