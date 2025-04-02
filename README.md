# shopr subscription service

<h1>Shopr - Dokumentace</h1>
<p>Application has a goal of providing service that creates subscription on every eshop imaginable as long as it has possibility of payment during order pick up by customer.</p>
<h2>Services used for infrastructure</h2>
<p>MongoDB - Database</p>
<p>Stripe - Payment</p>
<p>Pipedrive - CRM and operations</p>
<h2>Backend</h2>
<p>Everything runs on Node.js. It has a classic structure with routes and App, server routes, route controllers.</p>
<p>Api routes are always starting with /api/{routeIdentificator}/{action}/{parameters}.</p>
<h2>Frontend</h2>
<p>Front end is build in two parts - website and app. Website is build with next for creating static pages that are better for SEO purposes with few dynamic components, that are not important for SEO. App itself is built on react with SPA mindset.</p>
