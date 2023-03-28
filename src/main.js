import 'bootstrap/dist/css/bootstrap.min.css';
import { getFact } from './utils.js';

document.getElementById('factButton').addEventListener('click', async () => {
  const fact = await getFact();
  const factEl = document.createElement('p');
  factEl.textContent = fact;
  document.body.appendChild(factEl);
});

import { createButton } from "./utils";

const formEl = document.querySelector('form');

formEl.addEventListener('submit', createButton)