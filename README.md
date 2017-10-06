# mjs-require
Making npm CommonJS based modules available in NodeJS ESM.

## How to install
You can install it either globally or locally, and use it in latter case via `npm` scripts.
```sh
npm install -g mjs-require
```

## How to use
Require the module before launching your ESM based project.
```sh
node -r mjs-require --experimental-modules index.mjs
```

### Why
Right now it's impossible to write ESM modules in NodeJS, and also use published CJS modules.
The introduction of `.mjs` somehow threw away the ability to use million of already published, battle tested, and production ready packages.

You have two choices here:

  * ask every module publisher to provide an `.mjs` version of their library and re-publish it somehow in `npm` changing the default file entry
  * use any hack you can to pretend this `.mjs` story never existed
  * use the NodeJS platform, its native behaviors, and its standards, as close as you can.

The purpose of this module is to re-enable what got lost in ES2015 modules translations: backward compatibility with the entirety of npm packages. It uses few lines, and it brings back the CommonJS `require` we've been using since the beginning of the NodeJS time.

Happy ESM Migration 🎉