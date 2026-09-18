# 📸 Aperture — Image Gallery

A responsive, animated image gallery built with plain **HTML, CSS, and JavaScript** — featuring category filters, a full-screen lightbox with keyboard navigation, and smooth hover transitions. Built as part of the **CodeAlpha Internship** (Front-End Development track).

---

## ✨ Features

- **Magazine-style responsive grid** — mixed tile sizes for a natural, editorial layout
- **Category filters** — filter images by Landscape, Urban, Portrait, and Abstract, with a live image count
- **Lightbox view** — click any image to open it full-screen
- **Next / Previous navigation** — arrow buttons, on-screen index counter, and full **keyboard support** (`←` `→` to navigate, `Esc` to close)
- **Hover effects & smooth transitions** — image zoom, caption slide-up, and fade/scale animations throughout
- **Fully responsive** — adapts from a 4-column desktop grid down to a single column on mobile
- **Accessible** — visible focus states and respects `prefers-reduced-motion`
- **Ice Blue / Powder Blue theme** — a cool, calm color palette applied across the whole UI

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — custom properties (CSS variables), Grid layout, transitions & keyframe animations
- **Vanilla JavaScript (ES6)** — DOM manipulation, event handling, filtering logic, and lightbox navigation (no frameworks or libraries)

---

## 📁 Project Structure

```
CodeAlpha_Image-Gallery/
├── index.html      # Page markup/structure
├── style.css        # All styling (theme, layout, animations, responsive rules)
├── script.js        # Gallery rendering, filtering, and lightbox logic
└── README.md         # Project documentation
```

---

## 🚀 Getting Started

No build tools, no dependencies — just open it in a browser.

1. **Clone the repository**
   ```bash
   git clone https://github.com/AimanShabbir03/CodeAlpha_Image-Gallery.git
   ```
2. **Move into the project folder**
   ```bash
   cd CodeAlpha_Image-Gallery
   ```
3. **Open `index.html`**
   - Double-click the file to open it directly in your browser, **or**
   - Use a live server (e.g. the VS Code "Live Server" extension) for the best experience

That's it — no installation required.

---

## 🎮 Usage

- Click any **filter tab** (All work / Landscape / Urban / Portrait / Abstract) to narrow the grid
- **Click on any image** to open it in the lightbox
- Inside the lightbox:
  - Use the **‹** / **›** buttons, or the **left/right arrow keys**, to move between images
  - Press **Esc** or click outside the image to close
- Hover over any tile to preview its category and title before opening it

---

## 🖼️ Customizing the Photos

All image data lives in a single array at the top of `script.js`:

```js
const photos = [
  { id: 1018, cat: 'landscape', name: 'Ridgeline, first light', size: 'a' },
  // ...
];
```

- `id` — maps to a [Picsum Photos](https://picsum.photos) image ID (swap in your own image URLs if preferred)
- `cat` — category used by the filter bar (`landscape`, `urban`, `portrait`, `abstract`)
- `name` — caption shown on hover and in the lightbox
- `size` — controls the tile's footprint in the grid (`a`, `b`, or `c`)

Add, remove, or edit entries in this array to build your own gallery.

---

## 📱 Responsive Breakpoints

| Screen width      | Layout                          |
|-------------------|----------------------------------|
| `> 980px`         | 4-column grid                    |
| `620px – 980px`   | 2-column grid                    |
| `< 620px`         | Single column, full-width tiles  |

---

## 👩‍💻 Author

**Aiman Shabbir**
Software Engineer & Frontend Developer

- 📧 Email: [aimilicious02@gmail.com](mailto:aimilicious02@gmail.com)
- 💻 GitHub: [@AimanShabbir03](https://github.com/AimanShabbir03)
- 🔗 LinkedIn: [aiman-s-342390326](https://www.linkedin.com/in/aiman-s-342390326/)

---

## 📄 License

This project is open source and available for learning purposes. Feel free to fork it and build on top of it.

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
