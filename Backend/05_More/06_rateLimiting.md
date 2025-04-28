# Rate Limiting: Fixed Window vs Sliding Window

## **Fixed Window Rate Limiting**

In **Fixed Window**, the time is divided into fixed intervals (e.g., 1 second, 1 minute, etc.). A counter tracks the number of requests made during the current interval. If the number of requests exceeds the allowed limit, further requests are rejected until the next interval starts.

### How It Works

1. Define a time window (e.g., 1 minute).
2. Count the number of requests in the current window.
3. If the count exceeds the limit, reject additional requests until the next window starts.

### Example

- **Limit**: 5 requests per minute.
- **Scenario**:
  - At `12:00:00`, the counter resets.
  - A user makes 5 requests between `12:00:00` and `12:00:30`. All are allowed.
  - If the user makes a 6th request at `12:00:40`, it is rejected.
  - At `12:01:00`, the counter resets, and the user can make 5 more requests.

### Issue

Fixed Window can allow bursts at the boundary. For example:

- If 5 requests are made at `12:00:59` and another 5 at `12:01:01`, 10 requests are processed in 2 seconds.

---

## **Sliding Window Rate Limiting**

In **Sliding Window**, the time window "slides" with each request. Instead of resetting at fixed intervals, it calculates the rate limit over a rolling time window. This avoids the burst issue seen in Fixed Window.

### How It Works

1. Track the timestamps of each request.
2. For every new request, calculate the number of requests made in the last time window (e.g., 1 minute).
3. If the count exceeds the limit, reject the request.

### Example

- **Limit**: 5 requests per minute.
- **Scenario**:
  - At `12:00:00`, a user makes 3 requests.
  - At `12:00:30`, the user makes 2 more requests (total = 5 in the last minute). All are allowed.
  - At `12:00:40`, the user makes another request. The system checks the last minute (`12:00:40` to `12:00:00`) and sees 6 requests, so the new request is rejected.
  - At `12:01:00`, the first 3 requests (from `12:00:00`) are no longer counted, so the user can make new requests.

### Advantage

Sliding Window provides smoother rate limiting by avoiding bursts at the boundary.

---

### Comparison

| Feature                | Fixed Window         | Sliding Window       |
|------------------------|----------------------|----------------------|
| Simplicity             | Easy to implement   | More complex         |
| Burst Handling         | Can cause bursts    | Smooth enforcement   |
| Use Case               | Simple APIs         | High-traffic APIs    |
| Memory Usage           | Low                  | Higher               |
| Implementation         | Simple counter       | Timestamp tracking    |
| Performance            | Fast                 | Slower due to checks  |
