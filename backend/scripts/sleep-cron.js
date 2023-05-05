import { SLEEP_INTERVAL_MS, COUNT } from '../constants/basic.js';
import emoji from 'node-emoji';

for (let i = 0; i < COUNT; i++) {
  console.log(emoji.random().emoji);
  await new Promise(resolve => setTimeout(resolve, SLEEP_INTERVAL_MS));
}
