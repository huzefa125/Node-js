const fs = require("fs")


 //sync
// fs.writeFileSync('./test.txt','hey there')


//Aync
// fs.writeFile('./test.js','hey there',(err)=>{err})


//read sysnc file
// const result = fs.readFileSync('./app.js',"utf-8")
// console.log(result);

//read aync file
const results = fs.readFile('./app.js',"utf-8",(err,result)=>{
    if (err) {
        // console.log(err);
    }
    else{
        // console.log(results);
    }
})

// fs.appendFileSync("./app.js",new Date().getDate().toLocaleString());