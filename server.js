
var url = require('url'), 
    locale = require("locale");
    express= require('express');
var app = express();

app.use('/', express.static('./public'));

app.get('/api/whoami', function (req, res) {

    var ip = req.ip;
    var locales = new locale.Locales(req.headers["accept-language"]);
    var userAgent = require('ua-parser').parse(req.headers['user-agent']);

    var requestInfo =  JSON.stringify(toJSON(userAgent, locale.Locale["default"], ip));
    res.send(requestInfo);
});

app.listen(process.env.PORT || 8080);


function toJSON(ua, language, ip){
    return { ipaddress: ip,
    language:language,
    software: ua.os.toString()
    };
    
}
