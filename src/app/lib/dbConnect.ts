import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number;
}

const connection: ConnectionObject = {};

export async function dbConnection():Promise<void> {
    if (connection.isConnected) {
        console.log('Database already connected');
        return;
    }

    try {

        const db = await mongoose.connect(process.env.MONGO_URI!);
        connection.isConnected = db.connections[0].readyState;
        console.log('Database connected');
        
    } catch (error) {

        console.log('Error connecting to database', error);
        
    }
}

