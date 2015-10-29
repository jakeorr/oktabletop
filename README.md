# oktabletop website

## Cloning the repo

Make sure you have the [git installed](https://git-scm.com/downloads)

`git clone git@github.com:jakeorr/oktabletop.git`

Will clone this repo into a `oktabletop` directory.

## Running locally

[Install nodejs](https://nodejs.org/en/download/) which includes `npm`.

```
cd oktabletop
npm install -g bower
npm install -g gulp
npm install
bower install
```

To install bower and then install dependencies for this project.

You can then run `gulp` to start a monitored local server.

## Deploy

Pushing to `master` will trigger an automatic deploy to heroku, served at [oktabletop.com](http://oktabletop.com).
