/**
 * themes.js — tile colour themes for 2048
 * Each theme defines bg + text colour for tile values 2–2048 and t-high.
 */
const TileThemes = (() => {
  const THEMES = {
    pastel: {
      label: 'Pastel 🌸',
      tiles: {
        2:    { bg:'#f9d7e0', fg:'#5c3d45' },
        4:    { bg:'#ddd6f7', fg:'#3d3760' },
        8:    { bg:'#fddccc', fg:'#6b3a25' },
        16:   { bg:'#f4a08a', fg:'#5c2010' },
        32:   { bg:'#f2845a', fg:'#fff'    },
        64:   { bg:'#f5c842', fg:'#5c3d00' },
        128:  { bg:'#7ecba1', fg:'#fff'    },
        256:  { bg:'#6dbfea', fg:'#fff'    },
        512:  { bg:'#9d74d4', fg:'#fff'    },
        1024: { bg:'#d4956a', fg:'#fff'    },
        2048: { bg:'#f0c040', fg:'#fff', glow:'rgba(240,192,64,.5)' },
        high: { bg:'#3a3028', fg:'#fff'    },
      }
    },
    neon: {
      label: 'Neon ⚡',
      tiles: {
        2:    { bg:'#0d0d0d', fg:'#00ffcc' },
        4:    { bg:'#0d0d0d', fg:'#ff00ff' },
        8:    { bg:'#111',    fg:'#ffff00' },
        16:   { bg:'#001a00', fg:'#00ff44' },
        32:   { bg:'#1a0000', fg:'#ff4444' },
        64:   { bg:'#00001a', fg:'#4488ff' },
        128:  { bg:'#1a001a', fg:'#ff44ff' },
        256:  { bg:'#001a1a', fg:'#44ffff' },
        512:  { bg:'#1a1a00', fg:'#ffff44' },
        1024: { bg:'#0a0a0a', fg:'#ff8800' },
        2048: { bg:'#0a0a0a', fg:'#ffffff', glow:'rgba(255,255,255,.6)' },
        high: { bg:'#000',    fg:'#ff00ff' },
      }
    },
    retro: {
      label: 'Retro 👾',
      tiles: {
        2:    { bg:'#c8b560', fg:'#2b1d0e' },
        4:    { bg:'#b5a040', fg:'#2b1d0e' },
        8:    { bg:'#a07830', fg:'#fff'    },
        16:   { bg:'#885020', fg:'#fff'    },
        32:   { bg:'#703010', fg:'#fff'    },
        64:   { bg:'#582010', fg:'#ffd080' },
        128:  { bg:'#401808', fg:'#ffd080' },
        256:  { bg:'#301008', fg:'#ffb040' },
        512:  { bg:'#200808', fg:'#ff8020' },
        1024: { bg:'#180404', fg:'#ff6010' },
        2048: { bg:'#100202', fg:'#ffff00', glow:'rgba(255,220,0,.5)' },
        high: { bg:'#080101', fg:'#ff3300' },
      }
    },
    ocean: {
      label: 'Ocean 🌊',
      tiles: {
        2:    { bg:'#e0f4ff', fg:'#003355' },
        4:    { bg:'#b8e8ff', fg:'#003355' },
        8:    { bg:'#80ccff', fg:'#002244' },
        16:   { bg:'#44aaee', fg:'#fff'    },
        32:   { bg:'#1188cc', fg:'#fff'    },
        64:   { bg:'#0066aa', fg:'#fff'    },
        128:  { bg:'#004488', fg:'#aaddff' },
        256:  { bg:'#003366', fg:'#88ccff' },
        512:  { bg:'#002244', fg:'#66bbff' },
        1024: { bg:'#001133', fg:'#44aaff' },
        2048: { bg:'#000a1a', fg:'#00eeff', glow:'rgba(0,238,255,.5)' },
        high: { bg:'#00050f', fg:'#00ccdd' },
      }
    },
    candy: {
      label: 'Candy 🍬',
      tiles: {
        2:    { bg:'#ffb3c6', fg:'#6b0020' },
        4:    { bg:'#ffc8a2', fg:'#6b2000' },
        8:    { bg:'#ffe066', fg:'#5c3d00' },
        16:   { bg:'#b5f5a0', fg:'#1a4400' },
        32:   { bg:'#80e8ff', fg:'#003344' },
        64:   { bg:'#c8a0ff', fg:'#2a0066' },
        128:  { bg:'#ff80b0', fg:'#fff'    },
        256:  { bg:'#ff6060', fg:'#fff'    },
        512:  { bg:'#ff9040', fg:'#fff'    },
        1024: { bg:'#40cc80', fg:'#fff'    },
        2048: { bg:'#ff40cc', fg:'#fff', glow:'rgba(255,64,204,.5)' },
        high: { bg:'#cc0088', fg:'#fff'    },
      }
    },
    emoji: {
      label: 'Emoji 😄',
      // bg is the tile colour; the number is replaced by an emoji label in applyEmoji()
      emoji: true,
      map: { 2:'😊',4:'😎',8:'🤩',16:'😍',32:'🥳',64:'🔥',128:'💎',256:'🦄',512:'👑',1024:'🚀',2048:'🌟',high:'💀',billion:'🥳' },
      tiles: {
        2:    { bg:'#fff9c4', fg:'#5c4a00' },
        4:    { bg:'#ffe0b2', fg:'#5c2e00' },
        8:    { bg:'#ffccbc', fg:'#5c1a00' },
        16:   { bg:'#f8bbd0', fg:'#5c0022' },
        32:   { bg:'#e1bee7', fg:'#3a0050' },
        64:   { bg:'#bbdefb', fg:'#002255' },
        128:  { bg:'#b2dfdb', fg:'#00332b' },
        256:  { bg:'#dcedc8', fg:'#1a3300' },
        512:  { bg:'#fff176', fg:'#3a3000' },
        1024: { bg:'#ffcc80', fg:'#3a1a00' },
        2048: { bg:'#ffe57f', fg:'#3a2800', glow:'rgba(255,200,0,.55)' },
        high: { bg:'#212121', fg:'#fff'    },
      }
    },
    love: {
      label: 'Love 💕',
      tiles: {
        2:    { bg:'#fce4ec', fg:'#880033' },
        4:    { bg:'#f8bbd0', fg:'#880033' },
        8:    { bg:'#f48fb1', fg:'#fff'    },
        16:   { bg:'#f06292', fg:'#fff'    },
        32:   { bg:'#e91e63', fg:'#fff'    },
        64:   { bg:'#c2185b', fg:'#ffd6e7' },
        128:  { bg:'#ad1457', fg:'#ffd6e7' },
        256:  { bg:'#880e4f', fg:'#ffb3d1' },
        512:  { bg:'#6a0036', fg:'#ffb3d1' },
        1024: { bg:'#4a0028', fg:'#ff80ab' },
        2048: { bg:'#ff4081', fg:'#fff', glow:'rgba(255,64,129,.55)' },
        high: { bg:'#1a000e', fg:'#ff80ab' },
      }
    },
    jungle: {
      label: 'Jungle 🌿',
      tiles: {
        2:    { bg:'#f1f8e9', fg:'#1b4a00' },
        4:    { bg:'#dcedc8', fg:'#1b4a00' },
        8:    { bg:'#aed581', fg:'#1b3a00' },
        16:   { bg:'#8bc34a', fg:'#fff'    },
        32:   { bg:'#689f38', fg:'#fff'    },
        64:   { bg:'#558b2f', fg:'#f0ffe0' },
        128:  { bg:'#33691e', fg:'#ccff90' },
        256:  { bg:'#795548', fg:'#ffe0cc' },
        512:  { bg:'#5d4037', fg:'#ffd0b0' },
        1024: { bg:'#4e342e', fg:'#ffcc80' },
        2048: { bg:'#ffd600', fg:'#1b3a00', glow:'rgba(180,230,0,.5)' },
        high: { bg:'#1b2a00', fg:'#b9f6ca' },
      }
    },
  };

  const THEME_NAMES = Object.keys(THEMES);
  let current = localStorage.getItem('2048-tile-theme') || 'pastel';
  if (!THEMES[current]) current = 'pastel';

  // Inject a <style> tag and rewrite it whenever theme changes
  const styleEl = document.createElement('style');
  styleEl.id = 'tile-theme-style';
  document.head.appendChild(styleEl);

  function apply(name) {
    current = THEMES[name] ? name : 'pastel';
    localStorage.setItem('2048-tile-theme', current);
    document.documentElement.setAttribute('data-tile-theme', current);

    const theme = THEMES[current];
    const t     = theme.tiles;

    // Base tile colour rules (2 – 2048 + high fallback)
    let rules = Object.entries(t).map(([val, { bg, fg, glow }]) => {
      const cls    = val === 'high' ? '.t-high' : `.t${val}`;
      const shadow = glow ? `box-shadow:0 0 22px 4px ${glow};` : '';
      return `${cls}{background:${bg};color:${fg};${shadow}}`;
    }).join('\n');

    // Extended rules for t-high-N (tiles beyond 2048: 4096, 8192 … ~1B)
    // We interpolate between the theme's 2048 colour and a very dark shade
    // so each step gets progressively more intense.
    const base2048 = t[2048] || { bg:'#f0c040', fg:'#fff' };
    // 30 buckets covers 2^12 (4096) through 2^41 (>1B)
    const extendedRules = Array.from({ length: 30 }, (_, i) => {
      const darkness = Math.min(i / 15, 1); // 0 → 1 as tiles get bigger
      // Darken bg progressively; keep fg white
      return `.t-high-${i + 1}{background:color-mix(in srgb,${base2048.bg} ${Math.round((1-darkness*0.7)*100)}%,#000);color:#fff;` +
             (i > 10 ? `box-shadow:0 0 ${16+i}px ${3+i}px color-mix(in srgb,${base2048.bg} 60%,#000 40%);` : '') +
             `}`;
    }).join('\n');

    styleEl.textContent = rules + '\n' + extendedRules;

    // Emoji theme support
    const isEmoji = !!theme.emoji;
    document.documentElement.setAttribute('data-emoji-theme', isEmoji ? 'true' : 'false');
    window._tileEmojiMap = isEmoji ? theme.map : null;
  }

  function getThemes()  { return THEMES; }
  function getCurrent() { return current; }
  function getNames()   { return THEME_NAMES; }

  // Apply on load
  apply(current);

  return { apply, getThemes, getCurrent, getNames };
})();
