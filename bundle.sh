rm -rf build
mkdir -p build/js
babel src/client/app.js -o build/js/app.js
babel src/client/loginform.js -o build/js/loginform.js
cat build/js/loginform.js build/js/app.js > public/js/bundle.js

