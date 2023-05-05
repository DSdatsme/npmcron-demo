import { SLEEP_INTERVAL_MS, COUNT } from '../constants/basic.js';

for (let i = 0; i < COUNT; i++) {
  console.log("hiiii");
  await new Promise(resolve => setTimeout(resolve, SLEEP_INTERVAL_MS));
}
