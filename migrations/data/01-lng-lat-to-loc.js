const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: 'harvest65982',
});

pool.query(`
    UPDATE posts
    SET loc = POINT(lng, lat)
    WHERE loc is NULL;
`).then(()=>{
    console.log('UPDATE completed');
    pool.end();
}).catch((err)=>console.log(err.message));