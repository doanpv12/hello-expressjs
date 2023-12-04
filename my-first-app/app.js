const express = require('express')

const app = express()

app.get('/',(req,res)=>{
  res.send('<div style="color:red;">Hello from express</div>')
})

app.listen(3000,()=>{
  console.log(`This is log from my sample run at port: 3000`);
  console.log('One more log!!!!')
})