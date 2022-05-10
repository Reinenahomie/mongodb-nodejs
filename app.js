const express = require("express")
const {connectToDb, getDb} = require("./Db")

const app = express()

//db connection
let db
connectToDb(function(err){
    if (!err){
        app.listen(3000,() =>{
            console.log("app listening on port 3000")
        })
        db = getDb( )
    }

})
// routes
app.get("/books", (req,res) => {
    res.json( {mssg:"welcome to the api"})
})