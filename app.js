// ===== GNMATH GAMES DATA =====
const GAMES = [
  // Featured / Most Popular
  { id: 'minecraft', title: 'Minecraft 1.12.2', tag: 'port', plays: '2.3m', emoji: '⛏️', url: 'https://gnmath.global.ssl.fastly.net/', featured: true },
  { id: 'fnaf-sl', title: 'Five Nights at Freddy\'s: Sister Location', tag: 'port', plays: '1.8m', emoji: '🦊', url: 'https://gnmath.global.ssl.fastly.net/', featured: true },
  { id: 'bad-parenting', title: 'Bad Parenting 1', tag: 'port', plays: '885.7k', emoji: '👨‍👩‍👦', url: 'https://gnmath.global.ssl.fastly.net/', featured: true },
  { id: 'soundboard', title: 'Soundboard', tag: 'tools', plays: '4.1m', emoji: '🔊', url: 'https://gnmath.global.ssl.fastly.net/', featured: true },
  { id: 'ultrakill', title: 'ULTRAKILL', tag: 'port', plays: '950k', emoji: '🤖', url: 'https://gnmath.global.ssl.fastly.net/', featured: true },
  { id: 'buckshot', title: 'Buckshot Roulette', tag: 'port', plays: '1.1m', emoji: '🔫', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'people-playground', title: 'People Playground', tag: 'port', plays: '750k', emoji: '🧍', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'repo', title: 'R.E.P.O', tag: 'port', plays: '620k', emoji: '🤝', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'pizza-tower', title: 'Pizza Tower', tag: 'port', plays: '810k', emoji: '🍕', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'hollow-knight', title: 'Hollow Knight', tag: 'port', plays: '930k', emoji: '🦋', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'cuphead', title: 'Cuphead', tag: 'port', plays: '1.2m', emoji: '☕', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'omori', title: 'OMORI', tag: 'port', plays: '540k', emoji: '🌟', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'bendy', title: 'Bendy and the Ink Machine', tag: 'port', plays: '480k', emoji: '🖤', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'half-life', title: 'Half Life', tag: 'port', plays: '890k', emoji: '☢️', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'webfishing', title: 'WebFishing', tag: 'port', plays: '390k', emoji: '🎣', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'yume-nikki', title: 'Yume Nikki', tag: 'port', plays: '280k', emoji: '🌙', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'kindergarten', title: 'Kindergarten', tag: 'port', plays: '410k', emoji: '🏫', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'baldis', title: "Baldi's Basics Plus", tag: 'port', plays: '670k', emoji: '📏', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'thatsnot-my-neighbor', title: "That's Not My Neighbor", tag: 'port', plays: '720k', emoji: '🚪', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'chatbot', title: 'Chat Bot AI (A.I.)', tag: 'tools', plays: '1.5m', emoji: '🤖', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'iron-lung', title: 'Iron Lung', tag: 'port', plays: '560k', emoji: '🫁', url: 'https://gnmath.global.ssl.fastly.net/', featured: true },

  // Trending
  { id: 'ovo', title: 'OvO', tag: 'popular', plays: '2.1m', emoji: '🥚', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'ovo2', title: 'OvO 2', tag: 'popular', plays: '1.4m', emoji: '🥚', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'ovo3d', title: 'OvO 3 Dimensions', tag: 'popular', plays: '800k', emoji: '🥚', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'bowmasters', title: 'Bowmasters', tag: 'popular', plays: '3.2m', emoji: '🏹', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'gladihoppers', title: 'Gladihoppers', tag: 'popular', plays: '1.1m', emoji: '⚔️', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'ice-dodo', title: 'Ice Dodo', tag: 'popular', plays: '600k', emoji: '🐦', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'block-blast', title: 'Block Blast', tag: 'popular', plays: '2.8m', emoji: '🧱', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'jetpack-joyride', title: 'Jetpack Joyride', tag: 'popular', plays: '4.5m', emoji: '🚀', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'fnf', title: 'Friday Night Funkin', tag: 'fnf', plays: '5.2m', emoji: '🎵', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'sprunki', title: 'Sprunki', tag: 'fnf', plays: '1.9m', emoji: '🎶', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'temple-run', title: 'Temple Run 2', tag: 'popular', plays: '6.1m', emoji: '🏃', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'stickman-hook', title: 'Stickman Hook', tag: 'popular', plays: '3.9m', emoji: '🕷️', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'attack-hole', title: 'Attack Hole', tag: 'popular', plays: '2.2m', emoji: '🕳️', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'bridge-race', title: 'Bridge Race', tag: 'popular', plays: '1.7m', emoji: '🌉', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'basket-random', title: 'Basket Random', tag: 'popular', plays: '3.4m', emoji: '🏀', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'achievement-2', title: 'Achievement Unlocked 2', tag: 'flash', plays: '1.1m', emoji: '🏆', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },

  // More games
  { id: 'geometry-dash', title: 'Geometry Dash', tag: 'popular', plays: '7.8m', emoji: '📐', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'run3', title: 'Run 3', tag: 'flash', plays: '5.5m', emoji: '🏃', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'slope', title: 'Slope', tag: 'popular', plays: '9.1m', emoji: '⛷️', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: '1v1lol', title: '1v1.LOL', tag: 'popular', plays: '12m', emoji: '🔫', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'retrobowl', title: 'Retro Bowl', tag: 'popular', plays: '4.2m', emoji: '🏈', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'subway-surfers', title: 'Subway Surfers', tag: 'popular', plays: '15m', emoji: '🚇', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'cookie-clicker', title: 'Cookie Clicker', tag: 'flash', plays: '8.4m', emoji: '🍪', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'pokemon-red', title: 'Pokémon Red', tag: 'gba', plays: '3.1m', emoji: '🔴', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'pokemon-fire', title: 'Pokémon FireRed', tag: 'gba', plays: '2.7m', emoji: '🔥', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'zelda', title: 'Legend of Zelda', tag: 'dos', plays: '2.0m', emoji: '🗡️', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'doom', title: 'DOOM (1993)', tag: 'dos', plays: '1.8m', emoji: '👹', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'tetris', title: 'Tetris', tag: 'flash', plays: '6.2m', emoji: '🟦', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'snake', title: 'Snake', tag: 'flash', plays: '4.8m', emoji: '🐍', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'pac-man', title: 'Pac-Man', tag: 'flash', plays: '5.6m', emoji: '👾', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'fnaf', title: 'Five Nights at Freddy\'s', tag: 'port', plays: '3.8m', emoji: '🐻', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
  { id: 'among-us', title: 'Among Us', tag: 'popular', plays: '11m', emoji: '👨‍🚀', url: 'https://gnmath.global.ssl.fastly.net/', featured: false },
];

// ===== CINEBY MOVIES DATA =====
const MOVIES = [
  // Trending
  { id: 'qt8', title: 'QT8: The First Eight', type: 'movie', rating: '7.3', genre: 'documentary', url: 'https://www.cineby.ws/movie/vimtq9-qt8-the-first-eight-2019-online', trending: true },
  { id: 'transient', title: 'Transient', type: 'movie', rating: '', genre: 'sci-fi', url: 'https://www.cineby.ws/movie/fv0i3d-transient-2024-online', trending: true },
  { id: 'manager', title: 'Will You Be My Manager?', type: 'tv', rating: '9.0', genre: 'comedy', url: 'https://www.cineby.ws/tv/7n2rsy-will-you-be-my-manager-2025-full', trending: true },
  { id: 'apocalypto', title: 'Apocalypto', type: 'movie', rating: '7.8', genre: 'action', url: 'https://www.cineby.ws/movie/t8om0n-apocalypto-2006-online', trending: true },
  { id: 'xy-chelsea', title: 'XY Chelsea', type: 'movie', rating: '5.5', genre: 'documentary', url: 'https://www.cineby.ws/movie/ukrqsm-xy-chelsea-2019-online', trending: true },

  // Action
  { id: 'action1', title: 'Mad Max: Fury Road', type: 'movie', rating: '8.1', genre: 'action', url: 'https://www.cineby.ws/movies/genre/action', trending: false },
  { id: 'action2', title: 'The Dark Knight', type: 'movie', rating: '9.0', genre: 'action', url: 'https://www.cineby.ws/movies/genre/action', trending: false },
  { id: 'action3', title: 'John Wick', type: 'movie', rating: '7.4', genre: 'action', url: 'https://www.cineby.ws/movies/genre/action', trending: false },
  { id: 'action4', title: 'Avengers: Endgame', type: 'movie', rating: '8.4', genre: 'action', url: 'https://www.cineby.ws/movies/genre/action', trending: false },

  // Drama
  { id: 'drama1', title: 'The Shawshank Redemption', type: 'movie', rating: '9.3', genre: 'drama', url: 'https://www.cineby.ws/movies/genre/drama', trending: false },
  { id: 'drama2', title: 'Breaking Bad', type: 'tv', rating: '9.5', genre: 'drama', url: 'https://www.cineby.ws/series/genre/drama', trending: false },
  { id: 'drama3', title: 'Forrest Gump', type: 'movie', rating: '8.8', genre: 'drama', url: 'https://www.cineby.ws/movies/genre/drama', trending: false },
  { id: 'drama4', title: 'The Crown', type: 'tv', rating: '8.2', genre: 'drama', url: 'https://www.cineby.ws/series/genre/drama', trending: false },

  // Comedy
  { id: 'comedy1', title: 'The Office', type: 'tv', rating: '9.0', genre: 'comedy', url: 'https://www.cineby.ws/series/genre/comedy', trending: false },
  { id: 'comedy2', title: 'Superbad', type: 'movie', rating: '7.6', genre: 'comedy', url: 'https://www.cineby.ws/movies/genre/comedy', trending: false },
  { id: 'comedy3', title: 'Parks and Recreation', type: 'tv', rating: '8.6', genre: 'comedy', url: 'https://www.cineby.ws/series/genre/comedy', trending: false },
  { id: 'comedy4', title: 'The Grand Budapest Hotel', type: 'movie', rating: '8.1', genre: 'comedy', url: 'https://www.cineby.ws/movies/genre/comedy', trending: false },

  // Horror
  { id: 'horror1', title: 'Get Out', type: 'movie', rating: '7.7', genre: 'horror', url: 'https://www.cineby.ws/movies/genre/horror', trending: false },
  { id: 'horror2', title: 'A Quiet Place', type: 'movie', rating: '7.5', genre: 'horror', url: 'https://www.cineby.ws/movies/genre/horror', trending: false },
  { id: 'horror3', title: 'The Haunting of Hill House', type: 'tv', rating: '8.6', genre: 'horror', url: 'https://www.cineby.ws/series/genre/horror', trending: false },
  { id: 'horror4', title: 'Hereditary', type: 'movie', rating: '7.3', genre: 'horror', url: 'https://www.cineby.ws/movies/genre/horror', trending: false },

  // Sci-Fi
  { id: 'scifi1', title: 'Interstellar', type: 'movie', rating: '8.7', genre: 'science-fiction', url: 'https://www.cineby.ws/movies/genre/science-fiction', trending: false },
  { id: 'scifi2', title: 'The Matrix', type: 'movie', rating: '8.7', genre: 'science-fiction', url: 'https://www.cineby.ws/movies/genre/science-fiction', trending: false },
  { id: 'scifi3', title: 'Black Mirror', type: 'tv', rating: '8.8', genre: 'sci-fi', url: 'https://www.cineby.ws/series/genre/sci-fi', trending: false },
  { id: 'scifi4', title: 'Arrival', type: 'movie', rating: '7.9', genre: 'science-fiction', url: 'https://www.cineby.ws/movies/genre/science-fiction', trending: false },
  { id: 'scifi5', title: 'Stranger Things', type: 'tv', rating: '8.7', genre: 'sci-fi', url: 'https://www.cineby.ws/series/genre/sci-fi', trending: false },

  // Thriller
  { id: 'thriller1', title: 'Gone Girl', type: 'movie', rating: '8.1', genre: 'thriller', url: 'https://www.cineby.ws/movies/genre/thriller', trending: false },
  { id: 'thriller2', title: 'Inception', type: 'movie', rating: '8.8', genre: 'thriller', url: 'https://www.cineby.ws/movies/genre/thriller', trending: false },
  { id: 'thriller3', title: 'Mindhunter', type: 'tv', rating: '8.6', genre: 'thriller', url: 'https://www.cineby.ws/series/genre/thriller', trending: false },
  { id: 'thriller4', title: 'Se7en', type: 'movie', rating: '8.6', genre: 'thriller', url: 'https://www.cineby.ws/movies/genre/thriller', trending: false },

  // Animation
  { id: 'anim1', title: 'Spider-Man: Into the Spider-Verse', type: 'movie', rating: '8.4', genre: 'animation', url: 'https://www.cineby.ws/movies/genre/animation', trending: false },
  { id: 'anim2', title: 'Arcane', type: 'tv', rating: '9.0', genre: 'animation', url: 'https://www.cineby.ws/series/genre/animation', trending: false },
  { id: 'anim3', title: 'Soul', type: 'movie', rating: '8.1', genre: 'animation', url: 'https://www.cineby.ws/movies/genre/animation', trending: false },

  // Adventure
  { id: 'adv1', title: 'Indiana Jones', type: 'movie', rating: '8.4', genre: 'adventure', url: 'https://www.cineby.ws/movies/genre/adventure', trending: false },
  { id: 'adv2', title: 'Jurassic Park', type: 'movie', rating: '8.2', genre: 'adventure', url: 'https://www.cineby.ws/movies/genre/adventure', trending: false },
  { id: 'adv3', title: 'Avatar', type: 'movie', rating: '7.9', genre: 'adventure', url: 'https://www.cineby.ws/movies/genre/adventure', trending: false },

  // Romance
  { id: 'rom1', title: 'La La Land', type: 'movie', rating: '8.0', genre: 'romance', url: 'https://www.cineby.ws/movies/genre/romance', trending: false },
  { id: 'rom2', title: 'Pride & Prejudice', type: 'movie', rating: '7.8', genre: 'romance', url: 'https://www.cineby.ws/movies/genre/romance', trending: false },

  // Family
  { id: 'fam1', title: 'The Lion King', type: 'movie', rating: '8.5', genre: 'family', url: 'https://www.cineby.ws/movies/genre/family', trending: false },
  { id: 'fam2', title: 'Home Alone', type: 'movie', rating: '7.6', genre: 'family', url: 'https://www.cineby.ws/movies/genre/family', trending: false },

  // Crime
  { id: 'crime1', title: 'The Godfather', type: 'movie', rating: '9.2', genre: 'crime', url: 'https://www.cineby.ws/movies/genre/crime', trending: false },
  { id: 'crime2', title: 'Narcos', type: 'tv', rating: '8.8', genre: 'crime', url: 'https://www.cineby.ws/series/genre/crime', trending: false },
  { id: 'crime3', title: 'Pulp Fiction', type: 'movie', rating: '8.9', genre: 'crime', url: 'https://www.cineby.ws/movies/genre/crime', trending: false },

  // Documentary
  { id: 'doc1', title: 'Planet Earth II', type: 'tv', rating: '9.5', genre: 'documentary', url: 'https://www.cineby.ws/series/genre/documentary', trending: false },
  { id: 'doc2', title: 'The Social Dilemma', type: 'movie', rating: '7.6', genre: 'documentary', url: 'https://www.cineby.ws/movies/genre/documentary', trending: false },

  // Fantasy
  { id: 'fan1', title: 'The Lord of the Rings', type: 'movie', rating: '9.0', genre: 'fantasy', url: 'https://www.cineby.ws/movies/genre/fantasy', trending: false },
  { id: 'fan2', title: 'Game of Thrones', type: 'tv', rating: '9.2', genre: 'fantasy', url: 'https://www.cineby.ws/series/genre/fantasy', trending: false },
  { id: 'fan3', title: 'Harry Potter', type: 'movie', rating: '7.6', genre: 'fantasy', url: 'https://www.cineby.ws/movies/genre/fantasy', trending: false },
];

// ===== MOVIE EMOJIS =====
const GENRE_EMOJIS = {
  'action': '💥', 'drama': '🎭', 'comedy': '😂', 'horror': '😱',
  'science-fiction': '🚀', 'sci-fi': '🤖', 'thriller': '😨',
  'animation': '🎨', 'adventure': '🗺️', 'romance': '❤️',
  'family': '👨‍👩‍👧', 'crime': '🔍', 'documentary': '🎥',
  'fantasy': '🧙', 'mystery': '🔎', 'music': '🎵',
  'war': '⚔️', 'western': '🤠', 'history': '📜',
};

// ===== STATE =====
let currentSection = 'home';
let currentGameFilter = 'all';
let currentMovieFilter = 'all';
let currentGenre = 'all';
let currentModalUrl = '';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHomeGames();
  renderHomeMovies();
  renderAllGames();
  renderAllMovies();
  renderTrendingMovies();
  renderGenreChips();
});

// ===== NAVIGATION =====
function showSection(name) {
  // Hide all pages
  document.querySelectorAll('.section-page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Show hero only on home
  const hero = document.getElementById('home-hero');
  if (hero) hero.style.display = name === 'home' ? '' : 'none';

  // Activate selected
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  const tab = document.getElementById('tab-' + name);
  if (tab) tab.classList.add('active');
  const navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('active');

  currentSection = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

// ===== GAME RENDERING =====
function gameCardHTML(game, large = false) {
  const tagColors = {
    port: 'tag-port', flash: 'tag-flash', fnf: 'tag-fnf',
    popular: 'tag-popular', dos: 'tag-dos', gba: 'tag-port',
    tools: 'tag-popular'
  };
  const tagLabels = {
    port: 'PORT', flash: 'FLASH', fnf: 'FNF',
    popular: '🔥 HOT', dos: 'DOS', gba: 'GBA',
    tools: 'TOOL'
  };
  return `
    <div class="game-card" onclick="openGame('${game.id}', '${escHtml(game.title)}', '${game.url}', '${game.emoji}')">
      <div class="game-card-thumb">
        <div class="game-thumb-placeholder">${game.emoji}</div>
        <div class="play-overlay"><div class="play-btn-big">▶</div></div>
      </div>
      <div class="game-card-info">
        <div class="game-card-title">${escHtml(game.title)}</div>
        <div class="game-card-meta">
          <span>${game.plays} plays</span>
          <span class="game-tag ${tagColors[game.tag] || ''}">${tagLabels[game.tag] || game.tag.toUpperCase()}</span>
        </div>
      </div>
    </div>`;
}

function renderHomeGames() {
  const grid = document.getElementById('home-games-grid');
  if (!grid) return;
  const featured = GAMES.filter(g => g.featured).slice(0, 6);
  grid.innerHTML = featured.map(g => gameCardHTML(g)).join('');
}

function renderAllGames() {
  renderGameGrid(GAMES);
}

function renderGameGrid(games) {
  const grid = document.getElementById('games-grid');
  if (!grid) return;
  if (games.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No games found</h3><p>Try a different search or filter</p></div>`;
    return;
  }
  grid.innerHTML = games.map(g => gameCardHTML(g)).join('');
}

function filterGames() {
  const q = document.getElementById('game-search').value.toLowerCase();
  let filtered = GAMES;
  if (currentGameFilter !== 'all') filtered = filtered.filter(g => g.tag === currentGameFilter);
  if (q) filtered = filtered.filter(g => g.title.toLowerCase().includes(q));
  renderGameGrid(filtered);
}

function setGameFilter(filter, btn) {
  currentGameFilter = filter;
  document.querySelectorAll('#game-filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterGames();
}

// ===== MOVIE RENDERING =====
function movieCardHTML(movie) {
  const emoji = GENRE_EMOJIS[movie.genre] || '🎬';
  const typeClass = movie.type === 'tv' ? 'tv' : 'movie-t';
  const typeLabel = movie.type === 'tv' ? 'TV' : 'MOVIE';
  return `
    <div class="movie-card" onclick="openMovie('${movie.id}', '${escHtml(movie.title)}', '${movie.url}')">
      <div class="movie-poster">
        <div class="movie-poster-placeholder">${emoji}</div>
        <div class="movie-overlay">
          <div class="movie-play" style="margin:0 auto;">▶</div>
        </div>
      </div>
      <div class="movie-info">
        <div class="movie-title">${escHtml(movie.title)}</div>
        <div class="movie-meta">
          ${movie.rating ? `<span class="movie-rating">★ ${movie.rating}</span>` : ''}
          <span class="movie-type ${typeClass}">${typeLabel}</span>
        </div>
      </div>
    </div>`;
}

function renderHomeMovies() {
  const grid = document.getElementById('home-movies-grid');
  if (!grid) return;
  const trending = MOVIES.filter(m => m.trending).slice(0, 8);
  grid.innerHTML = trending.map(m => movieCardHTML(m)).join('');
}

function renderTrendingMovies() {
  const grid = document.getElementById('trending-movies-grid');
  if (!grid) return;
  const trending = MOVIES.filter(m => m.trending);
  grid.innerHTML = trending.map(m => movieCardHTML(m)).join('');
}

function renderAllMovies() {
  renderMovieGrid(MOVIES);
}

function renderMovieGrid(movies) {
  const grid = document.getElementById('movies-grid');
  if (!grid) return;
  if (movies.length === 0) {
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">🔍</div><h3>No titles found</h3><p>Try a different search or filter</p></div>`;
    return;
  }
  grid.innerHTML = movies.map(m => movieCardHTML(m)).join('');
}

function filterMovies() {
  const q = document.getElementById('movie-search').value.toLowerCase();
  let filtered = MOVIES;
  if (currentMovieFilter !== 'all') filtered = filtered.filter(m => m.type === currentMovieFilter);
  if (currentGenre !== 'all') filtered = filtered.filter(m => m.genre === currentGenre);
  if (q) filtered = filtered.filter(m => m.title.toLowerCase().includes(q));
  renderMovieGrid(filtered);
  // also update trending
  const tg = document.getElementById('trending-movies-grid');
  if (tg) {
    const tr = filtered.filter(m => m.trending);
    tg.innerHTML = tr.length ? tr.map(m => movieCardHTML(m)).join('') : '';
  }
}

function setMovieFilter(filter, btn) {
  currentMovieFilter = filter;
  document.querySelectorAll('#page-movies .filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterMovies();
}

function setGenre(genre, chip) {
  currentGenre = genre;
  document.querySelectorAll('.genre-chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  filterMovies();
}

function renderGenreChips() {
  const genres = [
    { id: 'all', label: '🎬 All' },
    { id: 'action', label: '💥 Action' },
    { id: 'drama', label: '🎭 Drama' },
    { id: 'comedy', label: '😂 Comedy' },
    { id: 'horror', label: '😱 Horror' },
    { id: 'science-fiction', label: '🚀 Sci-Fi' },
    { id: 'thriller', label: '😨 Thriller' },
    { id: 'animation', label: '🎨 Animation' },
    { id: 'adventure', label: '🗺️ Adventure' },
    { id: 'romance', label: '❤️ Romance' },
    { id: 'family', label: '👨‍👩‍👧 Family' },
    { id: 'crime', label: '🔍 Crime' },
    { id: 'documentary', label: '🎥 Documentary' },
    { id: 'fantasy', label: '🧙 Fantasy' },
  ];
  const container = document.getElementById('genre-chips');
  if (!container) return;
  container.innerHTML = genres.map(g =>
    `<button class="genre-chip ${g.id === 'all' ? 'active' : ''}" onclick="setGenre('${g.id}', this)">${g.label}</button>`
  ).join('');
}

// ===== GLOBAL SEARCH =====
function globalSearch(q) {
  if (!q) return;
  const lower = q.toLowerCase();
  const matchGames = GAMES.some(g => g.title.toLowerCase().includes(lower));
  const matchMovies = MOVIES.some(m => m.title.toLowerCase().includes(lower));
  if (matchGames) {
    showSection('games');
    document.getElementById('game-search').value = q;
    filterGames();
  } else if (matchMovies) {
    showSection('movies');
    document.getElementById('movie-search').value = q;
    filterMovies();
  }
}

// ===== MODAL =====
function openGame(id, title, url, emoji) {
  currentModalUrl = url;
  document.getElementById('modal-icon').textContent = emoji || '🎮';
  document.getElementById('modal-name').textContent = title;
  document.getElementById('modal-frame').src = url;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openMovie(id, title, url) {
  currentModalUrl = url;
  document.getElementById('modal-icon').textContent = '🎬';
  document.getElementById('modal-name').textContent = title;
  document.getElementById('modal-frame').src = url;
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modal-frame').src = '';
  document.body.style.overflow = '';
  currentModalUrl = '';
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

function reloadFrame() {
  const f = document.getElementById('modal-frame');
  f.src = f.src;
}

function openInTab() {
  if (currentModalUrl) window.open(currentModalUrl, '_blank');
}

function toggleFullscreen() {
  const box = document.querySelector('.modal-box');
  if (!box) return;
  if (box.style.width === '100vw') {
    box.style.width = '';
    box.style.height = '';
    box.style.borderRadius = '';
  } else {
    box.style.width = '100vw';
    box.style.height = '100vh';
    box.style.borderRadius = '0';
  }
}

// ===== PROXY =====
function loadProxy() {
  let url = document.getElementById('proxy-url-input').value.trim();
  if (!url) return;
  if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;

  // Build proxy URL using vcsaontop.bayworld.net
  const proxyBase = 'https://vcsaontop.bayworld.net/';
  const proxyUrl = proxyBase + encodeURIComponent(url);

  document.getElementById('proxy-current-url').textContent = url;
  const container = document.getElementById('proxy-frame-container');
  container.style.display = 'flex';
  document.getElementById('proxy-frame').src = proxyUrl;
  container.scrollIntoView({ behavior: 'smooth' });
}

function loadQuickProxy() {
  let url = document.getElementById('quick-proxy-url').value.trim();
  if (!url) return;
  if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;

  const proxyBase = 'https://vcsaontop.bayworld.net/';
  const proxyUrl = proxyBase + encodeURIComponent(url);

  const container = document.getElementById('quick-proxy-frame-container');
  container.style.display = 'block';
  document.getElementById('quick-proxy-frame').src = proxyUrl;
  container.scrollIntoView({ behavior: 'smooth' });
}

function openProxyTab() {
  let url = document.getElementById('proxy-url-input').value.trim();
  if (!url) url = 'https://vcsaontop.bayworld.net';
  if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://' + url;
  const proxyUrl = 'https://vcsaontop.bayworld.net/' + encodeURIComponent(url);
  window.open(proxyUrl, '_blank');
}

function reloadProxy() {
  const f = document.getElementById('proxy-frame');
  if (f) f.src = f.src;
}

function setProxyUrl(url) {
  document.getElementById('proxy-url-input').value = url;
}

// ===== UTILS =====
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#39;');
}

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});