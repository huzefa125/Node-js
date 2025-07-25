require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res) => {
    res.send('huzefa125')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>YouTube</h2>')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai and Code </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
