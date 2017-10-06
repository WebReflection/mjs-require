# mjs-require
Making npm CommonJS based modules available in NodeJS ESM.

## How to install
```sh
npm install -g mjs-require
```

## How to use
Require the module before launching your ESM based project.

```sh
node -r mjs-require --experimental-modules index.mjs
```