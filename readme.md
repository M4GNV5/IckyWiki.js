#IckyWiki.js

IckyWiki implements the [basic wiki priciples](http://c2.com/cgi/wiki?WikiPrinciples) implemented in only 7 lines of javascript code (551 character).
##[Read the annotated source](annotated.wiki.js)

##Usage
```bash
git clone https://github.com/M4GNV5/IckyWiki.js.git
cd IckyWiki.js
node wiki.js
```

##Source
```javascript
r=require,f="./p.json",p=r(f),e="replace";r("http").createServer((q,a)=>{a.
writeHead(200,{"Content-Type":"text/html"});u=q.url,m=u[1]!="e",s=decodeURI(u)[e
](/\+/g," ").split(/[?\/=]/g),n=s[2],c=p[n]=s[4]||p[n]||"";if(m){c+="\n\nsee "
for(k in p){if(p[k].indexOf(n)+1)c+=k+" ";c=c[e](RegExp(k,"g"),`<a href="/r/${k
}">${k}</a>`);}r("fs").writeFile(f,JSON.stringify(p));}a.end(m?`<h1>${n}</h1>${
c[e](/\n/g,"<br>")}<br><a href="/e/${n}">edit`:`<h1>${n}</h1><form action=/r/${n
} method=GET><textarea name=s>${c}</textarea><button>ok`);}).listen(1337);
```
