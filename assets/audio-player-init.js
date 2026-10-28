import { initializeAudioPlayer } from './audio-player.mjs';

document.querySelectorAll('[data-audio-player]').forEach(initializeAudioPlayer);
