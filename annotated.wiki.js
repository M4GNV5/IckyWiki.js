r = require, // saving require as a one char var is shorter as we need it twice
f = "./p.json", // we need filename twice -> shorter in one char variable
p = r(f), // require the file containing all pages
e = "replace"; // doing string[e] is smaller than string.replace
r("http").createServer((q, a) => { // create a http server
    a.writeHead(200, {"Content-Type": "text/html"}); //write html content type
    u = q.url, //u (url) = request url
    m = u[1] != "e", //m (mode) = url[1] != "e"
    s = decodeURI(u)[e](/\+/g, " ").split(/[?\/=]/g), //parse url and split at ? \ =
    // example url split = ["", "e", <name>, "s", <content>]
    n = s[2], // n (name) = split[2]
    c = p[n] = s[4] || p[n] || ""; // content = pages[name] = new content || old content || ""
    if (m) { // only add backlinks and parse links if mode != edit
        c += "\n\nsee "
        for (k in p) {
            if (p[k].indexOf(n) + 1) // check if page k has link to current page
                c += k + " "; // add page k to "see" if it contains like to current page
            c = c[e](RegExp(k, "g"), `<a href="/r/${k}">${k}</a>`); // parse links to pages
        }
        r("fs").writeFile(f, JSON.stringify(p)); // write pages to save file
    }
    a.end(m ?
        `<h1>${n}</h1>${c[e](/\n/g,"<br>")}<br><a href="/e/${n}">edit` // display content
        // edit html stuff (yes i love valid html)
        : `<h1>${n}</h1><form action=${n} method=GET><textarea name=s>${c}</textarea><button>ok`
    );
}).listen(1337); // listen on port 1337
