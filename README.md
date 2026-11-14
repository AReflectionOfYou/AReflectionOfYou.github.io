# AReflectionOfYou.github.io

The home page of the [A Reflection of You](https://github.com/AReflectionOfYou) organization, served by GitHub Pages at <https://areflectionofyou.github.io/>.

Plain HTML, CSS and a little JavaScript: no build step, frameworks, CDNs or analytics. `.nojekyll` tells GitHub Pages to serve the files as-is.

## What to edit

- `products.js`: the product cards. Each product is one line with its column (`keep` or `make`), name, status, description and link. Rename, add or move a product by editing that line.
- `styles.css`: colors and fonts are listed at the top as CSS variables.
- `index.html`: tagline, column intros, about blurb, footer links and the logo slot. Look for the comments.

To add the logo, put the image file in this folder and replace the `<span class="logo-mark">` in `index.html` with `<img src="logo.png" alt="A Reflection of You logo">`.
