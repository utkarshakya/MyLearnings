# JWT (JSON Web Token) Explained

## **What is a JWT Token?**

JWT (JSON Web Token) is a compact, URL-safe token format used for securely transmitting information between parties as a JSON object. It is commonly used for authentication and authorization in web applications.

A JWT consists of three parts:

1. **Header**: Contains metadata about the token, such as the type of token (`JWT`) and the signing algorithm used (e.g., `HS256`).
2. **Payload**: Contains the claims, which are statements about the user or additional data (e.g., user ID, roles, expiration time).
3. **Signature**: Ensures the token's integrity by verifying that it hasn't been tampered with. It is created by signing the header and payload using a secret key or a public/private key pair.

Example of a JWT:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

---

## **Why Do We Use JWT?**

### 1. **Authentication**

JWT is widely used for user authentication. After a user logs in, the server generates a JWT and sends it to the client. The client stores the token (e.g., in local storage or cookies) and includes it in subsequent requests (usually in the `Authorization` header). The server verifies the token to authenticate the user.

### 2. **Authorization**

JWT is used to control access to resources. For example, a user with a token containing a claim like `"role": "admin"` can access admin-only endpoints.

### 3. **Statelessness**

JWT is stateless, meaning the server does not need to store session data. All the information needed to verify the user is contained within the token itself, reducing server-side overhead.

### 4. **Cross-Domain Support**

Since JWT is URL-safe, it can be used across different domains, making it ideal for Single Sign-On (SSO) systems.

---

## **How JWT Works**

1. **User Logs In**:
   - The user provides credentials (e.g., username and password).
   - The server verifies the credentials and generates a JWT containing user information (e.g., user ID, roles).

2. **Token Sent to Client**:
   - The server sends the JWT to the client.
   - The client stores the token (e.g., in local storage or cookies).

3. **Client Makes Requests**:
   - The client includes the JWT in the `Authorization` header of each request:

     ```text
     Authorization: Bearer <JWT>
     ```

4. **Server Verifies Token**:
   - The server verifies the token's signature and checks its validity (e.g., expiration time).
   - If valid, the server processes the request; otherwise, it rejects it.

---

## **Advantages of JWT**

- **Compact**: Small size makes it efficient for transmission over the network.
- **Self-Contained**: Contains all the information needed for authentication and authorization.
- **Secure**: Uses cryptographic signatures to ensure integrity.
- **Scalable**: Stateless nature makes it suitable for distributed systems.

---

## **Disadvantages of JWT**

- **No Revocation**: Once issued, a JWT cannot be revoked unless additional mechanisms are implemented (e.g., a blacklist).
- **Payload Visibility**: The payload is base64-encoded, not encrypted, so sensitive data should not be stored in the token.
- **Token Size**: Larger than session IDs, which can impact performance in some cases.

---

### **Example of JWT Usage in Node.js**

```javascript
const jwt = require('jsonwebtoken');

// Secret key for signing the token
const secretKey = "your_secret_key";

// Generate a JWT
const token = jwt.sign({ userId: 123, role: "admin" }, secretKey, { expiresIn: "1h" });
console.log("Generated Token:", token);

// Verify a JWT
try {
  const decoded = jwt.verify(token, secretKey);
  console.log("Decoded Token:", decoded);
} catch (err) {
  console.error("Invalid Token:", err.message);
}
```
