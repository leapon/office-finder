# OfficeFinder

# Start
```
> git clone https://github.com/leapon/office-finder.git
> cd office-finder
> npm install
> npm start
```

Visit webapge at: http://localhost:8080/


# Start webserver to pulic on port 8090
```
node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --host 0.0.0.0 --port 9010

or

npm run start_pub_8090
```

# Make production build with webpack
```
webpack -p --config ./webpack.config.js 
```

# Run production release with http-server
```
npm install -g http-server

http-server 
```

# Run with pm2
```
pm2 start ./start --name officefinder 
```

# Run test

jest  // test all js files under __test__ subfolders

or 

npm run test  // test files under test/components


# Git Setup
```
git config user.name $GIT_USER_NAME
git config user.email $GIT_USER_EMAIL

git config credential.helper 'cache --timeout=3600'
git config credential.helper store

git config --list
```

