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

