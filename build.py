import os

html = ""
css = ""
js = ""
for sub, dirs, files in os.walk("./views/"):
	for d in dirs:
		with open('views/' + d + '/' + d + '.html') as file:
			html += (file.read() + '\n') 
			css += '\t<link rel="stylesheet" type="text/css" href="views/' + d + '/' + d + '.css" />\n'
			js += '\t<script src="views/' + d + '/' + d + '.js"></script>\n'


with open('index-template.html', 'r') as file :
	filedata = file.read()
	filedata = filedata.replace('{{views-css-link}}', css)
	filedata = filedata.replace('{{views-js-link}}', js)
	filedata = filedata.replace('{{views-html-content}}', html)

with open('index.html', 'w') as file:
	file.write(filedata)
