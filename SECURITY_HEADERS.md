# Security & Headers

This project adds baseline HTTP response headers via `next.config.js` for improved security posture.

## Currently Applied
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=()

## Recommended Additions (depending on hosting)
- Content-Security-Policy (CSP) with strict script-src and img-src directives
- Cross-Origin-Embedder-Policy / Cross-Origin-Opener-Policy if enabling advanced isolation
- Strict-Transport-Security (served automatically if using a managed HTTPS edge)

## CSP Example (baseline)
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'
```

Adjust directives to allow analytics or third-party services explicitly (never use wildcard * for scripts in production).
