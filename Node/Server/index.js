const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Received\n`;

    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Logging failed:", err);
    });

    switch (req.url) {
        case '/':
            res.end("Home Page");
            break;
        case '/about':
            res.end("About");
            break;
        default:
            res.end("404 error");
    }
});

myServer.listen(8000, () => console.log("Server Started"));
