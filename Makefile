
PROJECTDIR=public

dev:
	npm run dev

setup:
	npm install

update:
	npm update

surge:
	npm run build
	surge --domain https://your-svelte-app.surge.sh $(PROJECTDIR) your-svelte-app.surge.sh
