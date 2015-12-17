import path from 'path'

export default (locals, callback) => {
    let base = path.relative(locals.path, '/');

    switch(locals.path) {
        case './':
            var module = 'main';
            break;
        case './hello/':
            var module = 'hello';
            break;
        case './world/':
            var module = 'world';
            break;
    }

    var text = require('raw!./content/'+module+'.txt');

    callback(null, `
    <html>

    <head>
        <base href="${base}">
    </head>

    <body>
        <h1>${locals.path}</h1>
        <ul>
        ${locals.paths.map(path => `
            <li><a href="${path}">${path}</a></li>
        `)}
        </ul>

        <p>${text}</p>

        <script src="./main.bundle.js"></script>
    </body>

    </html>
    `)
}