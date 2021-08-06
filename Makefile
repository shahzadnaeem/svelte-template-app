
PROJECTDIR=public

surge:
	npm run build
	surge --domain https://shaz-svelte-template.surge.sh $(PROJECTDIR) shaz-svelte-template.surge.sh

dev:
	npm run dev
