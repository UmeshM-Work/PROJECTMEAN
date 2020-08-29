const express = require("express");
const app = express();

const add = require("./adddata")


app.get("/adduser", async(req, res) => {


    try {
        const input = req.query;


        await add.adduser(input);

        res.json({
            message: " success"
        });

    } catch (err) {

        res.json({
            message: " FAILURE"




        });
    }

});

app.listen(3000);