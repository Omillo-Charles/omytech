export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/login', '/register'],
      },
    ],
    sitemap: 'https://omytechkenya.co.ke/sitemap.xml',
  };
}
