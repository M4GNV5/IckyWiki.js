r=require,f="./p.json",p=r(f),e="replace";r("http").createServer((q,a)=>{a.
writeHead(200,{"Content-Type":"text/html"});u=q.url,m=u[1]!="e",s=decodeURI(u)[e
](/\+/g," ").split(/[?\/=]/g),n=s[2],c=p[n]=s[4]||p[n]||"";if(m){c+="\n\nsee "
for(k in p){if(p[k].indexOf(n)+1)c+=k+" ";c=c[e](RegExp(k,"g"),`<a href="/r/${k
}">${k}</a>`);}r("fs").writeFile(f,JSON.stringify(p));}a.end(m?`<h1>${n}</h1>${
c[e](/\n/g,"<br>")}<br><a href="/e/${n}">edit`:`<h1>${n}</h1><form action=/r/${n
} method=GET><textarea name=s>${c}</textarea><button>ok`);}).listen(1337);
