const express = require("express");
const { PORT } = require("./config");
const apiRouter = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRouter);

app.listen(PORT,async () => {
    console.log(`server successfully running on ${PORT}`);
    const {City,Airport} = require('./models');

    // const indore = await City.create({name:"indore"});
    // console.log(indore);
    // const rajabhojAirport = await indore.createAirport({name:"Rajabhoj",code:"Bpl"})
    // console.log(rajabhojAirport);
    const gwalior = await City.create({name:'Gwalior'});
    console.log(gwalior);
    const airportGwalior = await gwalior.createAirport({name:'Gwalior airport',code:'Gwl'})
    console.log(airportGwalior);
    
    
    
    
})