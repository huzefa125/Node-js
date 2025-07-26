import express from 'express';

const app = express()

app.get('/' , (req,res)=>{
    res.send('server is ready')
})

const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:"A Joke",
            content:"This is a joke"
        },

        {
            id:2,
            title:"Another Joke",
            content:"This is Another joke"
        },
        {
            id:3,
            title:"This is a Third Joke",
            content:"This is the Third Joe"
        },
        {
            id:4,
            title:"This is Forth Joke",
            content:"This is forth joke hahahahahahahhahahah",
        },
        {
            id:5,
            title:"This is fifth joke",
            content:"this is fifth joke",
        },
    ]
    res.send(jokes)
})