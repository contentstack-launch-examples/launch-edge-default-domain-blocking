# Domain Blocking Example

This example demonstrates how to block the default domain in a Next.js application using a edge function.

## What This Example Does

This example shows how to:
- Block requests to the default domain (`contentstackapps.com`)
- Return a `403 Forbidden` response for the blocked default domain
- Allow all other requests to pass through normally


## How It Works

```javascript
export default async function handler(request) {
  const currentUrl = new URL(request.url);
  const hostname = currentUrl.hostname;
  
  if (hostname.includes('contentstackapps.com')) {
    return new Response('Forbidden', {
      status: 403,
      statusText: 'Forbidden',
    });
  }
  
  return fetch(request);
}
```

## Running the Example

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
