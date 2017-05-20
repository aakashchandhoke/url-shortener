var exports = module.exports = {};
var os = require("os");

exports.mongoConfig = {
    /*serverUrl: "mongodb://localhost:27017/",
    database: "url"*/
    serverUrl:"mongodb://heroku_qz1zxj4q:8m1heu07sf2790k6vk540nri59@ds011291.mlab.com:11291/",
    database: "heroku_qz1zxj4q"
    /*url:process.env.MONGOLAB_URI;*/        
};

exports.webhost = "http://" + os.hostname();
