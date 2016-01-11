#IckyWiki.js

IckyWiki implements the [basic wiki priciples](http://c2.com/cgi/wiki?WikiPrinciples) implemented in only 7 lines of javascript code (551 character).

Special thanks go to Kate for the idea and the feedback :)

## [Read the annotated source](annotated.wiki.js)

##Usage
```bash
git clone https://github.com/M4GNV5/IckyWiki.js.git
cd IckyWiki.js
node wiki.js
```
Now open `127.0.0.1:1337` in your browser

##Source
```javascript
r=require,f="./p.json",p=r(f),e="replace",l='<a href="$&">$&</a>';r("http").
createServer((q,a)=>{s=q.url.split(/[\/?]/g),m=s[1]!="e",n=s[2]||"land",c=p[n]=r
("querystring").parse(s[3]).s||p[n]||"404";if(m){c=c[e](/</g, "&lt;")+"\n\nsee "
for(k in p){if(p[k].indexOf(n)+1)c+=k+" ";c=c[e](RegExp(k,"g"),l);}r("fs").
writeFile(f,JSON.stringify(p))}a.end(`<h1>${n}</h1>`+(m?`${c[e](/http[^\s]+/g,l)
[e](/\n/g,"<br>")}<br><a href="/e/${n}">edit`:`<form action=/r/${n} method=GET>
<textarea name=s>${c}</textarea><br><button>ok`))}).listen(1337);
```
