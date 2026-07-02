/**
 * sounds.js — Web Audio API sound effects for 2048
 * All sounds are synthesised (no audio files needed).
 */

const Sounds = (() => {
  'use strict';

  let ctx = null;
  let enabled = JSON.parse(localStorage.getItem('2048-sound') ?? 'true');

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    // Resume if browser suspended it (autoplay policy)
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /** Low-level: play an oscillator burst */
  function playTone({ type = 'sine', freq = 440, freq2 = null,
                       gain = 0.18, attack = 0.005, decay = 0.12,
                       detune = 0 } = {}) {
    if (!enabled) return;
    try {
      const c   = getCtx();
      const osc = c.createOscillator();
      const env = c.createGain();

      osc.type    = type;
      osc.detune.value = detune;
      osc.frequency.setValueAtTime(freq, c.currentTime);
      if (freq2) osc.frequency.exponentialRampToValueAtTime(freq2, c.currentTime + decay);

      env.gain.setValueAtTime(0, c.currentTime);
      env.gain.linearRampToValueAtTime(gain, c.currentTime + attack);
      env.gain.exponentialRampToValueAtTime(0.001, c.currentTime + attack + decay);

      osc.connect(env);
      env.connect(c.destination);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + attack + decay + 0.02);
    } catch (_) { /* silently ignore if audio not available */ }
  }

  /** Slide / move — soft whoosh */
  function move() {
    playTone({ type: 'sine', freq: 180, freq2: 120, gain: 0.08, decay: 0.09 });
  }

  /** Tile merge — bright chime, pitch scales with tile value */
  function merge(value) {
    // Map tile value to a pleasant pentatonic pitch
    const pitches = [0,0,220,262,330,392,494,587,698,880,1047,1319,1568,1976];
    const idx     = Math.min(Math.log2(value), pitches.length - 1);
    const freq    = pitches[Math.round(idx)] || 440;
    playTone({ type: 'triangle', freq, freq2: freq * 1.5, gain: 0.22, decay: 0.18 });
  }

  /** New tile spawn — tiny soft pop */
  function spawn() {
    playTone({ type: 'sine', freq: 600, freq2: 400, gain: 0.07, attack: 0.002, decay: 0.06 });
  }

  /** Undo — reverse-feeling descend */
  function undo() {
    playTone({ type: 'sine', freq: 350, freq2: 200, gain: 0.12, decay: 0.14 });
  }

  /** Win — cheerful rising arpeggio */
  function win() {
    if (!enabled) return;
    [0, 80, 160, 240].forEach(delay => {
      setTimeout(() => {
        const notes = [523, 659, 784, 1047];
        const i     = delay / 80;
        playTone({ type: 'triangle', freq: notes[i], gain: 0.2, decay: 0.22 });
      }, delay);
    });
  }

  /** Game over — sad descending tones */
  function gameOver() {
    if (!enabled) return;
    [0, 120, 260].forEach((delay, i) => {
      setTimeout(() => {
        const notes = [330, 262, 196];
        playTone({ type: 'sine', freq: notes[i], gain: 0.14, decay: 0.3 });
      }, delay);
    });
  }

  function setEnabled(val) {
    enabled = val;
    localStorage.setItem('2048-sound', JSON.stringify(val));
  }
  function isEnabled() { return enabled; }

  return { move, merge, spawn, undo, win, gameOver, setEnabled, isEnabled };
})();
