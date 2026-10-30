//SQL
const connection=require('../config/db');
exports.getAllusers=(req,res) => {
    //SELECT
    connection.query('SELECT * FROM userdata', (err,rows,fields) => {
        if(err) throw err;
        res.json(rows);
    }
)}

