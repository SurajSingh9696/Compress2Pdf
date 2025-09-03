const express = require("express");
const multer = require("multer");
const cors = require("cors");

const { compressController } = require("./Controllers/CompressController");

const upload = multer({storage: multer.memoryStorage()});
const exp = express();
exp.use(express.json());
exp.use(cors());


exp.post("/compress" , upload.array("images") , compressController);

exp.listen(3333 , ()=>{
            console.log(`Server is running`);
        })