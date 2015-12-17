var fileContent = require("raw!./content/hello.txt");

var anchorTags = document.getElementsByTagName('a');
var baseHref = document.getElementsByTagName('base')[0].getAttribute('href');

for ( var i = 0; i < anchorTags.length; ++i) {
    let tag = anchorTags[i];
    tag.onclick = e => {
        let href = tag.getAttribute('href').slice(0, -1);
        let originalHref = tag.href;
        if (href === '.') href = 'main';

        require.ensure(['http', 'path'], require => {
            var http = require('http');
            var path = require('path');
            var url = location.href + path.join(baseHref, 'content', href);
            console.log(url)
            http.get(url+'.txt', res => {
                res.on("data", function(chunk) {
                    alert("Content: " + chunk);
                    location.href = tag.href
                });
            })
        });
        return false;
    }
}
