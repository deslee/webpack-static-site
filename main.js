var fileContent = require("raw!./content/hello.txt");

console.log("HI");
console.log(fileContent);

module.exports = function (locals, callback) {
    callback(null, `
    <html>

    <head>

    </head>

    <body>
        hi
    </body>

    </html>
    `)
};