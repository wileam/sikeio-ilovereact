# the clean target will not work properly if a file named clean is ever created in this directory
# more Special Built-in Target Names: https://www.gnu.org/software/make/manual/html_node/Special-Targets.html#Special-Targets
.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css, js/app.js'


.PHONY: clean
clean:
	rm -r bundle