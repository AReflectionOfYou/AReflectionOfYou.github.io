/*
  The product list. The home page builds its cards from this file.

  To rename a product, change its "name".
  To add a product, copy one line and edit it.
  To move a product to another panel, change "panel" to "instant" (Make Memories, no setup),
  "setup" (Make Memories, some setup) or "keep" (Keep Memories).

  status: "live", "construction" (under construction), or "soon" (coming soon)
  link:   the page or repo to open, or "" for no link yet
  icon:   optional picture shown on the card, from the icons folder
  cta:    optional button text, instead of "Play now" / "Take a look"
  note:   optional heads-up shown on the card, for anything unusual about getting started
*/
const PRODUCTS = [
  // Make Memories, instant play: games that need no setup
  { panel: "instant", name: "Swing Time",       status: "live",         description: "Swing your phone to ring virtual handbells and play music together.", link: "https://areflectionofyou.github.io/SwingTimeGame/" },
  { panel: "instant", name: "Two of You",       status: "live",         description: "A memory game to play together.", link: "https://areflectionofyou.github.io/TwoOfYouGame/", icon: "icons/two-of-you.png" },

  // Make Memories, some setup needed
  { panel: "setup", name: "Quartets of You",  status: "live",         description: "Find the hidden groups of four in this word game.", link: "https://areflectionofyou.github.io/QuartetsOfYouGame/", icon: "icons/quartets-of-you.svg" },
  { panel: "setup", name: "Quartets of You Puzzle Packs", status: "live", description: "Write your own Quartets of You puzzles, host them for free, and share a link to play them.", link: "https://github.com/AReflectionOfYou/quartets-puzzle-pack-template", icon: "icons/quartets-of-you.svg",
    cta: "Use the template", note: "For people comfortable with GitHub: it's a template repository with sample packs and a check that catches mistakes." },
  { panel: "setup", name: "A Glimpse of You", status: "live",         description: "Figure out who is in the photo with yes/no questions, played together on your home network.", link: "https://github.com/AReflectionOfYou/AGlimpseOfYouGame",
    cta: "Set it up", note: "Needs some computer setup: you install it on a Mac or PC and start it from Terminal. Phones then join over your home WiFi." },

  // Keep Memories: tools that hold on to the memories you already have
  { panel: "keep", name: "Photo Stories Desktop", status: "live", description: "Tell the stories behind your special photos, name the people in them, and keep it all in a permanent archive. For Mac, Windows and Linux.", link: "https://github.com/AReflectionOfYou/PhotoStoriesDesktop/releases/latest",
    cta: "Download", note: "In alpha testing: the app is still being tested, so expect some rough edges." },
  { panel: "keep", name: "Photo Stories Mobile",  status: "soon", description: "Capture photos and the stories behind them on your phone.", link: "" },
  { panel: "keep", name: "Biographies",      status: "soon",         description: "Life stories drawn from interviews, from first questions to finished keepsake.", link: "" },
];

const STATUS_LABELS = {
  live: "",
  construction: "Under construction",
  soon: "Coming soon",
};

// Build the cards. You should not need to change anything below this line.
function renderProducts() {
  for (const panel of ["instant", "setup", "keep"]) {
    const list = document.getElementById(panel + "-list");
    if (!list) continue;
    list.textContent = "";

    for (const p of PRODUCTS.filter((item) => item.panel === panel)) {
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

      if (p.note) {
        const note = document.createElement("p");
        note.className = "card-note";
        note.textContent = p.note;
        card.append(note);
      }

      if (p.link) {
        const cta = document.createElement("span");
        cta.className = "card-cta";
        cta.textContent = p.cta || (p.status === "live" ? "Play now" : "Take a look");
        cta.setAttribute("aria-hidden", "true");
        card.append(cta);
      }

      item.append(card);
      list.append(item);
    }
  }
}

renderProducts();
