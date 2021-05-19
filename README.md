# typescript-module-empty-template

> Bootstrap template for typescript module projects with a full CI/CD set.

(This template was created with another template: [typescript-webpack-empty-template](https://github.com/binary-person/typescript-webpack-empty-template))

## Purpose of this

This is mainly for myself but it may bring some usefulness to others that want to avoid the whole headache of setting up a typescript project with formatting, and linting tools. (Basically the full simplified CI/CD setup.)

I suggest using this in combination with [np](https://www.npmjs.com/package/np).

## What is included

- typescript (of course)
- prettier
- eslint
- jest
- dead simple travis config
- example `index.ts` with its corresponding `.test.ts` file

### `npm run` scripts

- `format`
  - runs `prettier` (a tool used to format your code)
- `lint`
  - runs `eslint`
- `jesttest`
  - runs `jest`. Be sure to include at least one `.test.ts` to prevent it from failing
- `build`
  - deletes everything in `lib/*` and runs `tsc`
  - same thing as `build` but uses the `tsconfig.prod.json` file instead. Runs `test` before building
- `test`
  - combination of `prettier --check`, `build`, `jesttest`, and `lint`

## Where is everything (aka. how to get started)

- `src/index.ts` is the module entry point

## Parting words

Hope you find this to be a great time saver. Please open an issue if there's anything that is missing and essential to development.
