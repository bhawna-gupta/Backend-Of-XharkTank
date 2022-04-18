const Pool =require("pg").Pool;
const pool =new Pool({
    user: 'admin',
    password: 'Admin@1324',
    database: 'xharktank',
    host:'localhost',
    port:5432
});

module.exports=pool;