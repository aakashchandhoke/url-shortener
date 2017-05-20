var exports = module.exports = {};
var os = require("os");

exports.mongoConfig = {
    /*serverUrl: "mongodb://localhost:27017/",
    database: "url"*/
    serverUrl:"mongodb://heroku_p41gt2rh:5gbk6ne2v411elcq1o293a6v5d@ds149221.mlab.com:49221/",
    database: "heroku_p41gt2rh"
    /*url:process.env.MONGOLAB_URI;*/        
};

exports.webhost = "http://" + os.hostname();
