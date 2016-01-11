r = require, // saving require as a one char var is shorter as we need it 3 times
f = "./p.json", // we need filename twice -> shorter in one char variable
p = r(f), // require the file containing all pages
e = "replace", // doing string[e] is smaller than string.replace
l = '<a href="$&">$&</a>'; // replace string for urls and links
r("http").createServer((q,a) => {
	// leaving out content-type as sent content starts with <h1>
	// -> browser should detect it as html autmatically (at least chrome does)

	// s (split) = request url split (e.g. ["", "e", <name>, <content>])
	s = q.url.split(/[\/?]/g),
	m = s[1] != "e", // m (mode) = url[1] != "e"
	n = s[2] || "land", // n (name) = split[2] || "land"

	// content = page[name] = sent content || old content || 404
	c = p[n] = r("querystring").parse(s[3]).s || p[n] || "404";
	if(m) {
		c=c[e](/</g, "&lt;")+"\n\nsee " // escape < and add backlink's "see"
		for(k in p) {
			if(p[k].indexOf(n)+1) // check if page[k] contains current pages' name
				c+=k+" "; // add BackLink to current page
			c=c[e](RegExp(k,"g"),l); // AutomaticLinkGeneration
		}
		r("fs").writeFile(f,JSON.stringify(p)) // save pages to file "./p.json"
	}
	a.end(`<h1>${n}</h1>` + (m ? // send html to browser (who needs valid html?)
		// we also do url parsing and \n escaping here
		`${c[e](/http[^\s]+/g,l)[e](/\n/g,"<br>")}<br><a href="/e/${n}">edit`:
		// most wikis use post, but POST with node requires subscribing to events etc.
		`<form action=/r/${n} method=GET><textarea name=s>${c}</textarea><br><button>ok`))
}).listen(1337); // listen on port 1337
// we could use a smaller port here like 80 to save 2 bytes but as long as it
// doesnt mean 1 more line of code idc
