# Node.js Basics – Q&A Style

## 1. ❓ What is Node.js?
**Answer:**  
Node.js is an **open-source, cross-platform JavaScript runtime environment** that allows you to run JavaScript code **outside the browser**.  
It is built on the **V8 JavaScript engine** and is designed for building **fast, scalable server-side applications**.

**Key Features:**
- Asynchronous & Event-driven
- Single-threaded, non-blocking I/O
- Cross-platform
- Large ecosystem via npm

---

## 2. ❓ How do you write "Hello World" in Node.js?
**Answer:**  
You can use `console.log()` to print output in the terminal.

```js
// hello.js
console.log("Hello, World!");


3. ❓ What are Modules in Node.js?
Answer:
Modules are reusable pieces of code in Node.js.
There are three types:

Core Modules – Built into Node.js (e.g., fs, http, path)

Local Modules – Your own custom JavaScript files

Third-party Modules – Installed via npm (e.g., express)

Example – Using a Core Module (os):

js
Copy
Edit
// os-example.js
const os = require('os');

console.log("Operating System:", os.platform());
console.log("Free Memory:", os.freemem());

5. ❓ How do you create an HTTP Server in Node.js?
Answer:
You can use the http core module to create a simple web server.

js
Copy
Edit
// server.js
const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.end("About Page");
    } else {
        res.end("404 Page Not Found");
    }
});

server.listen(8000, () => {
    console.log("Server running at http://localhost:8000/");
});