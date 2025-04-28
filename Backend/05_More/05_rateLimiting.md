# Rate Limiting in Web Applications

Rate limiting is a technique used to control the number of requests a client can make to a server within a specific time frame. It helps prevent abuse, such as denial-of-service (DoS) attacks, and ensures fair usage of server resources.

---

## Implementing Rate Limiting in an Express App

### Using `express-rate-limit`

The `express-rate-limit` library is a popular choice for implementing rate limiting in Express applications.

### Steps to Implement Rate Limiting

1. **Install the library**:

   ```bash
   npm install express-rate-limit
   ```

2. **Set up rate limiting middleware**:

   ```javascript
   const express = require('express');
   const rateLimit = require('express-rate-limit');

   const app = express();

   // Define rate limiting rules
   const limiter = rateLimit({
       windowMs: 15 * 60 * 1000, // 15 minutes
       max: 100, // Limit each IP to 100 requests per windowMs
       message: 'Too many requests from this IP, please try again later.',
   });

   // Apply the rate limiter to all requests
   app.use(limiter);

   app.get('/', (req, res) => {
       res.send('Welcome to the Express app!');
   });

   app.listen(3000, () => {
       console.log('Server is running on port 3000');
   });
   ```

3. **Customize for specific routes**:
   You can apply the rate limiter to specific routes or groups of routes:

   ```javascript
   app.use('/api', limiter);
   ```

---

## Server-Level Rate Limiting

Web servers like **Nginx** and **Apache** can handle rate limiting automatically, which is often more efficient as it prevents excessive requests from reaching your application.

### Rate Limiting with Nginx

Nginx has built-in support for rate limiting using the `limit_req` module.

#### Steps to Configure Nginx

1. **Enable the `limit_req` module**:
   Ensure the module is enabled in your Nginx installation.

2. **Add configuration**:

   ```nginx
   http {
       limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;

       server {
           listen 80;
           server_name example.com;

           location / {
               limit_req zone=one burst=20 nodelay;
               proxy_pass http://localhost:3000;
           }
       }
   }
   ```

   - `rate=10r/s`: Limits each client to 10 requests per second.
   - `burst=20`: Allows a burst of up to 20 requests before rate limiting kicks in.
   - `nodelay`: Rejects requests exceeding the rate immediately.

3. **Reload Nginx**:

   ```bash
   sudo nginx -s reload
   ```

---

### Rate Limiting with Apache

Apache supports rate limiting using the `mod_ratelimit` module.

#### Steps to Configure Apache

1. **Enable the module**:

   ```bash
   sudo a2enmod ratelimit
   sudo systemctl restart apache2
   ```

2. **Add configuration**:

   ```apache
   <VirtualHost *:80>
       ServerName example.com

       <Location />
           SetOutputFilter RATE_LIMIT
           SetEnv rate-limit 1024
       </Location>

       ProxyPass / http://localhost:3000/
       ProxyPassReverse / http://localhost:3000/
   </VirtualHost>
   ```

   - `SetEnv rate-limit 1024`: Limits the data transfer rate to 1024 bytes per second.

3. **Restart Apache**:

   ```bash
   sudo systemctl restart apache2
   ```

---

## When to Use Server-Level vs Application-Level Rate Limiting

- **Server-Level Rate Limiting**:
  - More efficient as it blocks requests before they reach your application.
  - Ideal for high-traffic applications to reduce backend load.

- **Application-Level Rate Limiting**:
  - Provides more granular control over specific routes or user behavior.
  - Useful for implementing custom logic or user-specific rate limits.

---

## Combining Both Approaches

For maximum protection, you can combine server-level rate limiting with application-level rate limiting. This ensures that excessive requests are blocked early, while your application can enforce more specific rules.

---

***NOTE: In shared hosting, you are limited to application-level rate limiting or the features provided by the hosting provider. For more control like customizing the configuration shown above, running your own server (e.g., VPS or dedicated server) is necessary.***
