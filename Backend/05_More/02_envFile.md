# .env File

The `.env` file stores environment variables as `KEY=VALUE` pairs, used to configure applications securely and flexibly.

## Key Features

- **Environment Variables**: Centralizes configuration settings.
- **Security**: Keeps sensitive data out of source code.
- **Portability**: Supports different environments (e.g., development, production).

## Example

```plaintext
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=secret
API_KEY=your-api-key
```

## Usage in Node.js

Install the `dotenv` package and load the `.env` file:

```bash
npm install dotenv
```

```javascript
require('dotenv').config();
console.log(process.env.PORT); // Access variables
```

## Best Practices

1. **Do Not Commit**: Add `.env` to `.gitignore`.
2. **Use Defaults**: Handle missing variables in code.
3. **Separate Environments**: Use `.env.development`, `.env.production`, etc.
4. **Provide `env.example`**: Document required variables without sensitive values.

The `.env` file simplifies configuration management while enhancing security.
