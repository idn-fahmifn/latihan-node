/**
 * module : HTTP 
 * 
 * cara membuat server sederhana dengan module http.
 * 
 */

// import module http
const http = require("http");

const server = http.createServer((req, res)=>{
    // Inisiasi Variable yang digunakan

    let data;
    // panggil request yang diterima oleh server
    console.log(req);


    /**
     * menampilkan sebuah object dari data,
     * object request yang sering dipakai itu ada : url, method, headers
     */

    data = {
        url: req.url,
        method: req.method,
        header: req.headers,
    };

    // console.log(data)

    res.end(JSON.stringify(data))

});

server.listen(3000)