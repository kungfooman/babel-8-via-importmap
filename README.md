Setup:

1) Place this repository in your web server (e.g. `/var/www` or `C:/xampp/htdocs`)

2) Install the one and only dependency - `@babel/core` - via:

    ```sh
    npm install
    ```

3) Open http://127.0.0.1/babel-8-via-importmap/test.html

The only reason `./gensync.mjs` and `./semver.mjs` is in the root is because they still don't ship ESM modules.

We link to the files in `node_modules` via `./importmap.js`.

`@babel/core` and all its other dependencies are now proper ESM (EcmaScript modules).
