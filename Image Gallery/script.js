const photos = [
  { id: 1018, cat: 'landscape', name: 'Ridgeline, first light',      size:'a' },
  { id: 1036, cat: 'landscape', name: 'Fog over the pass',           size:'c' },
  { id: 1043, cat: 'landscape', name: 'Low tide, salt flats',        size:'b' },
  { id: 1015, cat: 'landscape', name: 'River bend, late autumn',     size:'c' },
  { id: 1015, cat: 'landscape', name: 'Glacial valley',              size:'c', seed:1 },

  { id: 1067, cat: 'urban',     name: 'Stairwell, west block',       size:'b' },
  { id: 1074, cat: 'urban',     name: 'Awning study',                size:'c' },
  { id: 1078, cat: 'urban',     name: 'Night market, wet street',    size:'a' },
  { id: 164,  cat: 'urban',     name: 'Parking structure, noon',     size:'c' },

  { id: 64,   cat: 'portrait',  name: 'M., workshop light',          size:'b' },
  { id: 91,   cat: 'portrait',  name: 'Portrait with window',        size:'c' },
  { id: 177,  cat: 'portrait',  name: 'After the shift',             size:'a' },
  { id: 1005, cat: 'portrait',  name: 'Two chairs',                  size:'c' },

  { id: 128,  cat: 'abstract',  name: 'Rust and grid',               size:'c' },
  { id: 145,  cat: 'abstract',  name: 'Water, overexposed',          size:'b' },
  { id: 219,  cat: 'abstract',  name: 'Folded tarpaulin',            size:'c' },
  { id: 1069, cat: 'abstract',  name: 'Static, unedited',            size:'a' },
];

const galleryEl = document.getElementById('gallery');
const filterCountEl = document.getElementById('filterCount');
let currentFilter = 'all';
let visibleList = [];
let currentIndex = 0;

function imgUrl(p, w, h){
  return `https://picsum.photos/id/${p.id}/${w}/${h}`;
}

function catLabel(cat){
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function renderGallery(){
  galleryEl.innerHTML = '';
  photos.forEach((p, i) => {
    const fig = document.createElement('figure');
    fig.className = `tile size-${p.size}`;
    fig.dataset.cat = p.cat;
    fig.dataset.index = i;
    fig.style.animationDelay = `${(i % 8) * 0.05}s`;

    const img = document.createElement('img');
    img.src = imgUrl(p, 700, 900);
    img.alt = p.name;
    img.loading = 'lazy';

    const info = document.createElement('div');
    info.className = 'tile-info';
    info.innerHTML = `<p class="tile-cat">${catLabel(p.cat)}</p><p class="tile-name">${p.name}</p>`;

    fig.appendChild(img);
    fig.appendChild(info);
    fig.addEventListener('click', () => openLightbox(i));

    galleryEl.appendChild(fig);
  });
  applyFilter(currentFilter);
}

function applyFilter(filter){
  currentFilter = filter;
  const tiles = Array.from(galleryEl.children);
  visibleList = [];
  tiles.forEach((tile) => {
    const match = filter === 'all' || tile.dataset.cat === filter;
    tile.classList.toggle('hide', !match);
    if (match) visibleList.push(Number(tile.dataset.index));
  });
  filterCountEl.textContent = `${visibleList.length} image${visibleList.length !== 1 ? 's' : ''}`;
}

document.getElementById('filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilter(btn.dataset.filter);
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCat = document.getElementById('lbCat');
const lbName = document.getElementById('lbName');
const lbIndexEl = document.getElementById('lbIndex');

function openLightbox(photoIndex){
  currentIndex = visibleList.indexOf(photoIndex);
  if (currentIndex === -1) currentIndex = 0;
  showLightboxImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showLightboxImage(){
  const p = photos[visibleList[currentIndex]];
  lbImage.src = imgUrl(p, 1400, 1000);
  lbImage.alt = p.name;
  lbCat.textContent = catLabel(p.cat);
  lbName.textContent = p.name;
  lbIndexEl.textContent = `${currentIndex + 1} / ${visibleList.length}`;
}

function closeLightbox(){
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showNext(){
  currentIndex = (currentIndex + 1) % visibleList.length;
  showLightboxImage();
}

function showPrev(){
  currentIndex = (currentIndex - 1 + visibleList.length) % visibleList.length;
  showLightboxImage();
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbNext').addEventListener('click', showNext);
document.getElementById('lbPrev').addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

renderGallery();
