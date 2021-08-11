#!/user/bin/en sh

set -e

npm run build 

cd dist 

git init
git add -A 
git commit -m 'new deploy'
git push -f https://github.com/larmloso/vue-page.git master:gh-pages

cd -

