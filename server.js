const http = require("http");
const mongodb = require("mongodb");

let db;
const connectingString = "mongodb+srv://tokhirjonov:tokhirjonov15@cluster0.x7adtjv.mongodb.net/Reja";

mongodb.connect(connectingString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, client) => {
    if(err) console.log("ERROR on connecting MongoDB");
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
});  
    }
});
