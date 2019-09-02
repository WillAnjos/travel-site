var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
    if (error) {
        return console.log(error);
    } else {
        return console.log("Congrats");
    }
});
var myPhotoLocatrion = 'https://images.unsplash.com/photo-1552120476-9ee56c8611f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
    
https.get(myPhotoLocatrion, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/dev.jpg"));
});