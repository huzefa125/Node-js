const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Logging failed:", err);
    });

    switch (myUrl.pathname) {
        case '/':
            res.end("Home Page");
            break;

        case '/about':
            const username = myUrl.query.myname || "Guest";
            res.end(`Hi ${username}`);
            break;

        case '/search':
            const search = myUrl.query.search_query || "error";
            res.end(`Here are your results for ${search} `);
            break; // <-- Must have break

        case '/signup':
            if(req.method === 'GET'){
                res.end("his is sign up page")
            }
            else {
                res.end("This is normal page")
            }
            break
        default:
            res.end("404 Error - Page Not Found");
    }
});

myServer.listen(8000, () => console.log("Server Started on port 8000"));
