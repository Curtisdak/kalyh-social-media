import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection pool
const myDB = mysql2.createPool({
    host: process.env.HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || "curtis",
    password: process.env.MYSQL_PASSWORD || "wild",
    database: process.env.DATABASE || 'gems',
});

(async() => {
    try {
        const connection = await myDB.getConnection(); // Get a connection from the pool
        console.log('Database connected successfully!');
        connection.release(); // Release it back to the pool
    } catch (err) {
        console.error('Database connection failed:', err);
    }
})();

export default myDB;