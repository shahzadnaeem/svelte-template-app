
PROJECTDIR=public

surge:
	npm run build
	surge --domain https://your-svelte-app.surge.sh $(PROJECTDIR) your-svelte-app.surge.sh

dev:
	npm run dev
