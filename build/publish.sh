git checkout production
npm version patch
npm run build:prod
cp ./resources/assets/CNAME ./httpdocs
cd httpdocs
git init
git add -A
git commit -m 'publish'
git push -f git@github.com:steven-klein/moosedanceproductions.git master:gh-pages
cd ../
npm run build
