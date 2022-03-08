# Basic configuration to start using esbuild in a project with Vanilla JS and SASS

Just copy the code of this repo into your project and start coding your js and sass.

## Installation

```shell
yarn install
```

## While you are working

```shell
yarn dev
```

This will keep esbuild watching for your changing and build them asap, this command does not create any server or refresh your browser tab.

## Building

```shell
yarn build
```

This command will build you js and css ready for production.

## Manifest

If you are working with frameworks that can read from a manifest file to map the assets to the correct location, you can uncomment
the manifestPlugin, this will generate a manifest file in the build folder. The new assets generated now will have a hash in the name
to prevent been cached by browsers.

How to use the manifest files on Symfony Framework: https://symfony.com/blog/new-in-symfony-5-1-remote-asset-manifest
