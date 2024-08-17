# Rust React Boilerplates

Basic boilerplate configuration to import a local rust library in a vite based environment

## Prerequisites
You need to install npm and rust
[Installing npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
[Installing rust](https://www.rust-lang.org/tools/install)

### 1. Install wasm-pack
To build the package, we need an additional tool, wasm-pack. This helps compile the code to WebAssembly, as well as produce the right packaging for use in the browser.

```sh
cargo install wasm-pack
```

For more information visit mdn [Compiling from Rust to WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_Wasm)

### 2. Install the project
After running npm install is also necessary to build the rust library due to interoperability between the vite project and the lib, imported as dependency and initialized before creating the react root node.
```sh
cd app
npm run install
npm run build:wasm
```

### Run the project
You can run the project by simply using

```sh
npm run dev
```

### Build the project
Building will recompile the rust library, and then the vite project.

```sh
npm run build
```