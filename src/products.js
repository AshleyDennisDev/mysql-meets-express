//get client/library 
// const { get } = require('express/lib/response');
const mysql = require('mysql2');

//creates connection
const connection = mysql.createConnection({
    /*host:
    user:
    password:
    database:
    */
});

// const query = 'SELECT * FROM Products'; // query the products from database

// // connects query request using callbacks which is not efficient
connection.query(query, (err, results, fields) => {
    if (err){
        console.log(err)
    }
    console.log(results)
});

//using a promise to request query, more efficient
const getAllProducts = async () => {
    const query = 'SELECT * FROM Products';
    const [results, fields] = await connection.promise().query(query)

    console.log(results);
    return results;
};
getAllProducts()

const createProduct = async(product) => {

    const insertQuery = `INSERT INTO Products(Description, SKU, UserId)
    VALUES('${product.Description}', '${product.SKU}', ${product.userId})`

    const [results, fields] = await connection.promise().query(insertQuery)

    console.log(results)

    return results
};

createProduct({
    Description: "Ashley new product",
    SKU: "Ashley1234",
    userId: 1
});

connection.end(); //closes connection

