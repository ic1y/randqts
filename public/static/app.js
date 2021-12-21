import { quotes } from './quotes.js';
function getQt() {
  const quote = quotes[Math.round(Math.random() * quotes.length)]
  const qt = document.getElementsByClassName('qt')[0];
  const au = document.getElementsByClassName('au')[0];
  qt.innerText = `"${quote.text}"`;
  if(quote.author != null) {au.innerText = `- ${quote.author}`;}
  else {au.innerText = `- Unknown`;}
}
try {
  getQt();
  setInterval(() => {
    getQt();
  }, 2500);
} catch(err) {
  console.error(err);
}