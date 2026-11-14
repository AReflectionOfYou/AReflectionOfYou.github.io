/*
  The product list. The home page builds its cards from this file.

  To rename a product, change its "name".
  To add a product, copy one line and edit it.
  To move a product to the other column, change "side" to "keep" or "make".

  status: "live", "construction" (under construction), or "soon" (coming soon)
  link:   the page or repo to open, or "" for no link yet
  icon:   optional picture shown on the card, from the icons folder
*/
const PRODUCTS = [
  // Keep Memories: tools that hold on to the memories you already have
  { side: "keep", name: "Photo Stories",    status: "soon",         description: "Capture and share your photos along with the stories behind them.", link: "https://github.com/AReflectionOfYou/PhotoStories" },
  { side: "keep", name: "Biographies",      status: "soon",         description: "Life stories drawn from interviews, from first questions to finished keepsake.", link: "" },

  // Make Memories: games you play together
  { side: "make", name: "Two of You",       status: "live",         description: "A memory game to play together.", link: "https://areflectionofyou.github.io/TwoOfYouGame/", icon: "icons/two-of-you.png" },
  { side: "make", name: "A Glimpse of You", status: "construction", description: "Guess who is in the family photo, played together on your home network.", link: "https://github.com/AReflectionOfYou/AGlimpseOfYouGame" },
  { side: "make", name: "Quartets of You",  status: "live",         description: "Find the hidden groups of four in this word game.", link: "https://areflectionofyou.github.io/QuartetsOfYouGame/", icon: "icons/quartets-of-you.svg" },
  { side: "make", name: "Swing Time",       status: "construction", description: "Swipe your phone to ring virtual handbells and play music together.", link: "https://areflectionofyou.github.io/SwingTimeGame/" },
];

const STATUS_LABELS = {
  live: "",
  construction: "Under construction",
  soon: "Coming soon",
};

// Build the cards. You should not need to change anything below this line.
function renderProducts() {
  for (const side of ["keep", "make"]) {
    const list = document.getElementById(side + "-list");
    if (!list) continue;
    list.textContent = "";

    for (const p of PRODUCTS.filter((item) => item.side === side)) {
      const item = document.createElement("li");
      const card = document.createElement(p.link ? "a" : "div");
      card.className = "card" + (p.status === "live" ? "" : " card-muted");
      if (p.link) card.href = p.link;

      if (p.icon) {
        const icon = document.createElement("img");
        icon.className = "card-icon";
        icon.src = p.icon;
        icon.alt = ""; // decorative: the name is right beside it
        card.append(icon);
      }

      const title = document.createElement("h3");
      title.className = "card-name";
      title.textContent = p.name;
      card.append(title);

      const label = STATUS_LABELS[p.status];
      if (label) {
        const badge = document.createElement("span");
        badge.className = "badge";
        badge.textContent = label;
        card.append(badge);
      }

      const text = document.createElement("p");
      text.className = "card-text";
      text.textContent = p.description;
      card.append(text);

      if (p.link) {
        const cta = document.createElement("span");
        cta.className = "card-cta";
        cta.textContent = p.status === "live" ? "Play now" : "Take a look";
        cta.setAttribute("aria-hidden", "true");
        card.append(cta);
      }

      item.append(card);
      list.append(item);
    }
  }
}

renderProducts();
