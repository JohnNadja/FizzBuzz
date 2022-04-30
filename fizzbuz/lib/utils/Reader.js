const fs = require("fs");

class Reader{
    static readJsonFile(path){ //método para leer archivo
        const rawdata = fs.readFileSync("explorers.json");
        return JSON.parse(rawdata);
    }
}

module.exports = Reader
