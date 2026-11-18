const express = require('express');
const app = express();
const PORT = 3000;

const BAKERY_NAME = 'Sweet Crumbs Bakery';

const menu = {
  Cakes: [
    ['Chocolate Truffle Cake', 650],
    ['Black Forest Cake', 550],
    ['Red Velvet Cake', 700],
  ],
  Pastries: [
    ['Pineapple Pastry', 60],
    ['Chocolate Eclair', 80],
    ['Butterscotch Pastry', 70],
  ],
  'Breads & Cookies': [
    ['Multigrain Bread', 70],
    ['Butter Cookies (250 g)', 120],
  ],
};

function page(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${BAKERY_NAME}</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #fff8f0; color: #4a2c1a; }
    nav { background: #8b4513; padding: 14px; text-align: center; }
    nav a { color: #fff; margin: 0 16px; text-decoration: none; font-weight: bold; }
    main { max-width: 640px; margin: 30px auto; padding: 0 16px; }
    li { margin: 6px 0; }
  </style>
</head>
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/menu">Menu</a>
    <a href="/contact">Contact</a>
  </nav>
  <main>${content}</main>
</body>
</html>`;
}

app.get('/', (req, res) => {
  res.send(page('Home', `
    <h1>${BAKERY_NAME}</h1>
    <p>Welcome! Freshly baked cakes, pastries and breads, made with love every morning.</p>
  `));
});

app.get('/menu', (req, res) => {
  let html = '<h1>Our Menu</h1>';
  for (const category in menu) {
    html += `<h2>${category}</h2><ul>`;
    menu[category].forEach(([item, price]) => {
      html += `<li>${item} - Rs. ${price}</li>`;
    });
    html += '</ul>';
  }
  res.send(page('Menu', html));
});

app.get('/contact', (req, res) => {
  res.send(page('Contact', `
    <h1>Contact Us</h1>
    <p><strong>Phone:</strong> +91 98765 43210</p>
    <p><strong>Address:</strong> 12 Main Market Road, Sector 5, New Delhi - 110001</p>
  `));
});

app.use((req, res) => {
  res.status(404).send(page('Not Found', '<h1>404 - Page not found</h1>'));
});

app.listen(PORT, () => {
  console.log(`${BAKERY_NAME} website running at http://localhost:${PORT}`);
});