# Security & Headers

Static deployment (Cloudflare Pages) uses the `_headers` file at the repo root to inject security headers (no runtime `headers()` since `output: 'export'`).

## Currently Applied (see `_headers`)
| Header | Purpose |
|--------|---------|
| X-Frame-Options: SAMEORIGIN | Prevent clickjacking |
| X-Content-Type-Options: nosniff | Mitigate MIME sniffing |
| Referrer-Policy: strict-origin-when-cross-origin | Limit referrer leakage |
| Permissions-Policy: geolocation=() | Disable geolocation by default |
| Content-Security-Policy | Restrict resource origins |
| Strict-Transport-Security | Enforce HTTPS (edge provided) |

## CSP Baseline
```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self' data:;
connect-src 'self';
frame-ancestors 'self';
base-uri 'self';
form-action 'self';
```

If you add analytics (e.g., plausible.io) extend:
```
script-src 'self' https://plausible.io; connect-src 'self' https://plausible.io; img-src 'self' data: https://plausible.io;
```

Avoid `*` or broad `https:` wildcards for `script-src`. Prefer hashing or nonce if inline scripts become necessary (currently there are none).

## Future Hardening
1. Add COOP / COEP if enabling advanced isolation:
	- Cross-Origin-Opener-Policy: same-origin
	- Cross-Origin-Embedder-Policy: require-corp
2. Add `Report-To` + `Content-Security-Policy-Report-Only` for monitoring before enforcing stricter directives.
3. Implement Subresource Integrity (SRI) if third-party scripts are introduced.

## Operational Guidance
Update `_headers` then redeploy. Cloudflare propagates changes quickly (<1 min). Validate via browser devtools > Network > Response Headers or `curl -I`.
