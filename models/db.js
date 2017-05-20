var exports = module.exports = {};
var os = require("os");

exports.mongoConfig = {
    serverUrl: "mongodb://localhost:27017/",
    database: "url"
    /*url:process.env.MONGOLAB_URI;*/        
};

exports.webhost = "http://" + os.hostname();
