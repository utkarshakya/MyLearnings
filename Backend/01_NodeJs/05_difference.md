# Difference between CommonJS and ES Modules

## CommonJS

- CommonJS is a module system used in Node.js.
- Modules are loaded synchronously.
- Uses `require()` to import modules.
- Uses `module.exports` or `exports` to export modules.
- Can conditionally load modules.
- Example:

  ```javascript
  // Importing a module
  const moduleA = require('./moduleA');
  
  // Exporting a module
  module.exports = {
    // ...exports
  };
  ```

## ES Modules

- ES Modules (ESM) is a standard module system in JavaScript.
- Modules are loaded asynchronously.
- Uses `import` to import modules.
- Uses `export` to export modules.
- Static structure, cannot conditionally load modules.
- Supports top-level `await`.
- Example:

  ```javascript
  // Importing a module
  import moduleA from './moduleA';
  
  // Exporting a module
  export const myFunction = () => {
    // ...function code
  };
  ```

### Key Differences

- **Syntax**: CommonJS uses `require()` and `module.exports`, while ES Modules use `import` and `export`.
- **Loading**: CommonJS modules are loaded synchronously, whereas ES Modules are loaded asynchronously.
- **Conditional Loading**: CommonJS can conditionally load modules, but ES Modules cannot.
- **Top-level `await`**: ES Modules support top-level `await`, which allows for asynchronous operations at the module's top level.
- **Strict Mode**: ES Modules are always in strict mode, whereas CommonJS modules are not in strict mode by default but can opt into it by adding `'use strict';` at the top of the file.
